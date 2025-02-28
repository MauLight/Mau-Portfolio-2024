import { useEffect, useRef, useState, type ReactNode } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import Compressor from 'compressorjs'
import { motion } from 'framer-motion'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Modal } from '@/components/Common/Modal'
import IndividualProductForm from './IndividualProductsForm'
import IndividualProductImage from './IndividualProductImage'
import ConfirmationModal from '@/components/Dev/Apps/Products/ConfirmationModal'
import { ProductProps } from '@/utils/types'
import { generateSignature } from '@/utils/functions'
import DashboardButton from './DashboardButton'

const CloudinaryCloudName = import.meta.env.VITE_CLOUDINARY_CLOUDNAME
const CloudinaryAPIKEY = import.meta.env.VITE_CLOUDINARY_APIKEY

export const productSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    brand: yup.string(),
    description: yup.string().required('Description is required'),
    image: yup.string().url('Image must be a valid URL'),
    weight: yup.number(),
    height: yup.number(),
    width: yup.number(),
    length: yup.number(),
    price: yup.number().required('Price is required'),
    discount: yup.number(),
    quantity: yup.number().required('Quantity is required'),
})

export const postToCloudinary = async (formData: FormData): Promise<any> => {
    try {
        const { data } = await axios.post(`https://api.cloudinary.com/v1_1/${CloudinaryCloudName}/image/upload`, formData)
        return data
    } catch (error) {
        console.log(error)
        return error
    }
}

function IndividualProduct(): ReactNode {

    const [confirmationDialogue, setConfirmationDialogue] = useState<boolean>(false)
    const [priceWithDiscount, setPriceWithDiscount] = useState<number>(0)
    const [compress, setCompress] = useState<number>(1)

    const [postProductIsLoading, setPostProductIsLoading] = useState<boolean>(false)

    const [tags, setTags] = useState<string[]>([])
    const [wasSubmitted, setWasSubmitted] = useState<boolean>(false)

    //* UseForm State
    const { watch, register, getValues, setValue, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            title: '',
            description: '',
            image: '',
            weight: 0,
            height: 0,
            width: 0,
            length: 0,
            price: 0,
            discount: 0,
            quantity: 0
        },
        resolver: yupResolver(productSchema)
    })

    const watchedValues = watch(['price', 'discount'])
    const valuesForDescription = watch(['title', 'brand'])
    const descriptionAdded = watch(['description'])

    const onSubmit = () => {
        setConfirmationDialogue(true)
    }

    //* Cloudinary state
    const [urlToCloudinary, setUrlToCloudinary] = useState<string>('')
    const [cloudinaryLoading, setCloudinaryLoading] = useState<boolean>(false)
    const [cloudinaryError] = useState<string | null>(null)
    const [urlToCloudinaryError, setUrlToCloudinaryError] = useState<boolean>(false)
    const [cloudinaryFileUpload, setCloudinaryFileUpload] = useState<string | null>(null)
    const [cloudinaryPublicId, setCloudinaryPublicId] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const handleFileButtonClick = (): void => {
        if (fileInputRef.current) {
            fileInputRef.current.click()
        }
    }

    //* Upload a new image to Cloudinary
    const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
        event.preventDefault()

        if (event.target.files !== null) {
            try {
                setCloudinaryLoading(true)
                const file = event.target.files[0]
                const formData = new FormData()
                if (compress === 1) {
                    new Compressor(file, {
                        quality: 0.6,
                        success(res) {
                            console.log(res.size, 'This is the new size.')
                            formData.append('file', res)
                            formData.append('upload_preset', 'marketplace')
                            postToCloudinary(formData)
                                .then((response) => {
                                    setCloudinaryFileUpload(response.secure_url)
                                    setCloudinaryPublicId(response.public_id)
                                    setValue('image', response.secure_url)
                                    setCloudinaryLoading(false)
                                })
                        }
                    })
                } else {
                    formData.append('file', file)
                    formData.append('upload_preset', 'marketplace')
                    postToCloudinary(formData)
                        .then((response) => {
                            setCloudinaryFileUpload(response.secure_url)
                            setCloudinaryPublicId(response.public_id)
                            setValue('image', response.secure_url)
                            setCloudinaryLoading(false)
                        })
                }
            } catch (error) {
                console.log(error)
                setCloudinaryLoading(false)
                toast.error(error as string)
            }


        }
    }

    const handleFileUploadFromUrl = async (): Promise<void> => {

        const isUrl = /^(https?:\/\/)?((([a-zA-Z0-9$_.+!*'(),;?&=-]|%[0-9a-fA-F]{2})+:)*([a-zA-Z0-9$_.+!*'(),;?&=-]|%[0-9a-fA-F]{2})+@)?(((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})(:[0-9]+)?(\/([a-zA-Z0-9$_.+!*'(),;:@&=-]|%[0-9a-fA-F]{2})*)*(\?([a-zA-Z0-9$_.+!*'(),;:@&=-]|%[0-9a-fA-F]{2})*)?(#([a-zA-Z0-9$_.+!*'(),;:@&=-]|%[0-9a-fA-F]{2})*)?$/.test(
            urlToCloudinary as string
        )

        if (isUrl) {
            try {
                setCloudinaryLoading(true)
                const file = urlToCloudinary
                const formData = new FormData()

                formData.append('file', file)
                formData.append('upload_preset', 'marketplace')
                const response = await postToCloudinary(formData)
                setCloudinaryFileUpload(response.secure_url)
                setCloudinaryPublicId(response.public_id)
                setValue('image', response.secure_url)

                setUrlToCloudinaryError(false)
                setCloudinaryLoading(false)
            } catch (error) {
                console.log(error)
                toast.error(error as string)
            }
        } else {
            setUrlToCloudinaryError(true)
        }
    }

    //* Erase last uploaded image if wants to upload another
    const handleResetUploadImage = async () => {
        const timestamp = Math.floor(Date.now() / 1000)
        const signature = generateSignature({ public_id: cloudinaryPublicId, timestamp })

        const formData = new FormData()
        formData.append('public_id', cloudinaryPublicId as string)
        formData.append('timestamp', timestamp.toString())
        formData.append('api_key', CloudinaryAPIKEY)
        formData.append('signature', signature)

        try {
            const response = await axios.post(`https://api.cloudinary.com/v1_1/${CloudinaryCloudName}/image/destroy`, formData)
            console.log('Image was deleted succesfully: ', response.data)
        } catch (error) {
            console.error('There was an error deleting this image: ', error)
        }

        setCloudinaryFileUpload(null)
        setValue('image', '')
    }

    function handleResetForm() {
        reset()
        setWasSubmitted(true)
    }

    async function handlePostProduct() {
        const data = getValues()

        const isUrl = /^(https?:\/\/)?((([a-zA-Z0-9$_.+!*'(),;?&=-]|%[0-9a-fA-F]{2})+:)*([a-zA-Z0-9$_.+!*'(),;?&=-]|%[0-9a-fA-F]{2})+@)?(((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)|([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})(:[0-9]+)?(\/([a-zA-Z0-9$_.+!*'(),;:@&=-]|%[0-9a-fA-F]{2})*)*(\?([a-zA-Z0-9$_.+!*'(),;:@&=-]|%[0-9a-fA-F]{2})*)?(#([a-zA-Z0-9$_.+!*'(),;:@&=-]|%[0-9a-fA-F]{2})*)?$/.test(data.image as string)
        if (isUrl) {
            setPostProductIsLoading(true)
            setTimeout(() => {
                setPostProductIsLoading(false)
                setWasSubmitted(true)
            }, 3000)
        }
    }

    function getPercentage() {
        const percentage = getValues().discount
        const price = getValues().price
        const discount = percentage ? (percentage / 100) * price : 0
        setPriceWithDiscount(price - discount)
    }

    useEffect(() => {
        getPercentage()
    }, [watchedValues])

    useEffect(() => {
        if (wasSubmitted && (watchedValues.length || valuesForDescription.length || descriptionAdded.length)) {
            setWasSubmitted(false)
        }
    }, [watchedValues, valuesForDescription, descriptionAdded])

    useEffect(() => {
        if (wasSubmitted) {
            reset()
            setTags([])
            setUrlToCloudinary('')
            setCloudinaryFileUpload(null)
            setUrlToCloudinaryError(false)
            setConfirmationDialogue(false)
        }

    }, [wasSubmitted])


    return (
        <>
            <form onSubmit={(e) => { e.preventDefault() }} className='w-full col-span-1 flex flex-col gap-y-5 px-4 md:px-10 py-10 bg-[#ffffff] rounded-[8px]'>
                <h1 className='text-[1rem] sm:text-[1.2rem] text-balance leading-tight'>Add individual products:</h1>
                <div className="flex gap-x-5">
                    <IndividualProductForm
                        tags={tags}
                        errors={errors}
                        setTags={setTags}
                        register={register}
                        setValue={setValue}
                        compress={compress}
                        setCompress={setCompress}
                        wasSubmitted={wasSubmitted}
                        descriptionAdded={descriptionAdded}
                        priceWithDiscount={priceWithDiscount}
                        cloudinaryFileUpload={cloudinaryFileUpload}
                        valuesForDescription={valuesForDescription}
                    />
                    <IndividualProductImage
                        error={cloudinaryError}
                        fileInputRef={fileInputRef}
                        isLoading={cloudinaryLoading}
                        handleFileUpload={handleFileUpload}
                        cloudinaryFileUpload={cloudinaryFileUpload}
                        handleFileButtonClick={handleFileButtonClick}
                        handleResetUploadImage={handleResetUploadImage}
                    >
                        {
                            <div className='flex flex-col gap-y-1'>
                                <label className='text-[0.8rem]' htmlFor="url">Upload Image from URL</label>
                                <div className='relative'>
                                    <input className={`w-full h-10 pr-10 truncate text-[0.9rem] bg-gray-50 rounded-[6px] border border-gray-300 ring-0 focus:ring-0 focus:outline-none px-2 placeholder-sym_gray-500 ${urlToCloudinaryError ? 'ring-1 ring-red-500' : ''}`} value={urlToCloudinary} onChange={({ target }) => { setUrlToCloudinary(target.value) }} type="text" />
                                    <button className='absolute top-1 right-1 w-[33px] h-[33px] rounded-[5px] bg-[#10100e] hover:bg-green-600 active:bg-[#10100e] transition-color duration-200' onClick={handleFileUploadFromUrl}>
                                        <i className="text-[#ffffff] fa-solid fa-plus"></i>
                                    </button>
                                </div>
                                {urlToCloudinaryError && <small className="text-red-500">Value is not a valid URL</small>}
                            </div>
                        }
                    </IndividualProductImage>
                </div>
                <div className="flex gap-x-2 justify-end">

                    <DashboardButton type='button' label='Reset' action={handleResetForm} actionType='cancel' />
                    <motion.button
                        transition={{ duration: 0.05 }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleSubmit(onSubmit)} className='w-[120px] h-10 bg-green-600 hover:bg-green-500 active:bg-green-600 transition-color duration-200 text-[#ffffff] flex items-center justify-center gap-x-2 rounded-[10px]'>
                        <i className="fa-solid fa-floppy-disk"></i>
                        Submit
                    </motion.button>

                </div>
            </form>
            {
                confirmationDialogue && (
                    <Modal openModal={confirmationDialogue} handleOpenModal={() => { setConfirmationDialogue(!confirmationDialogue) }}>
                        <ConfirmationModal
                            product={{ ...getValues() } as ProductProps}
                            handlePostProduct={handlePostProduct}
                            postProductError={false}
                            postProductIsLoading={postProductIsLoading}
                            setConfirmationDialogue={setConfirmationDialogue}
                        />
                    </Modal>
                )
            }
        </>
    )
}

export default IndividualProduct
