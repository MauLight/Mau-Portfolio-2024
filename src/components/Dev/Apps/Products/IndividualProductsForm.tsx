import { Dispatch, SetStateAction, useEffect, useState, type ReactNode } from 'react'
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { handleCopyToClipboard } from '@/utils/functions'
import AddTagsComponent from './AddTagsComponent'
import { generateWithGemini } from '@/gemini/gemini'
import { ReactTyped } from 'react-typed'
import { motion } from 'framer-motion'

interface IndividualProductFormProps {
    register: UseFormRegister<{
        length?: number | undefined
        image?: string | undefined
        brand?: string | undefined
        weight?: number | undefined
        height?: number | undefined
        width?: number | undefined
        discount?: number | undefined
        quantity: number
        title: string
        description: string
        price: number
    }> | UseFormRegister<{
        image?: string | undefined
        brand?: string | undefined
        weight?: number | undefined
        height?: number | undefined
        width?: number | undefined
        length?: number | undefined
        quantity: number | undefined
        title: string
        description: string
        price: number
        discount: number
    }>
    setValue: UseFormSetValue<{
        length?: number | undefined
        image?: string | undefined
        quantity: number
        brand?: string | undefined
        discount?: number | undefined
        weight?: number | undefined
        height?: number | undefined
        width?: number | undefined
        title: string
        price: number
        description: string
    }> | UseFormSetValue<{
        length?: number | undefined
        image?: string | undefined
        brand?: string | undefined
        weight?: number | undefined
        height?: number | undefined
        width?: number | undefined
        quantity: number
        title: string
        description: string
        price: number
        discount: number
    }>
    errors: FieldErrors<{
        image?: string | undefined
        title: string
        brand: string
        description: string
        weight: number | undefined
        height: number | undefined
        width: number | undefined
        length: number | undefined
        price: number | undefined
        discount: number | undefined
        quantity: number
    }>
    cloudinaryFileUpload: string | null
    priceWithDiscount: number
    compress: number
    setCompress: Dispatch<SetStateAction<number>>
    descriptionAdded: [string]
    valuesForDescription: [string, string | undefined]
    tags: Array<string>
    setTags: Dispatch<SetStateAction<Array<string>>>
    wasSubmitted: boolean
}

//const animatedGradient = 'animated-background bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
const animatedGradientText = 'inline-block text-transparent bg-clip-text animated-background bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'

function IndividualProductForm({
    tags,
    errors,
    setTags,
    register,
    setValue,
    compress,
    setCompress,
    wasSubmitted,
    descriptionAdded,
    priceWithDiscount,
    valuesForDescription,
    cloudinaryFileUpload,
}: IndividualProductFormProps): ReactNode {

    const [generatedDescription, setGeneratedDescription] = useState<string>('')
    const [generatedTags, setGeneratedTags] = useState<Array<string>>([])
    const [isTypingDone, setIsTypingDone] = useState(false)

    const handleTypingEnd = () => {
        setIsTypingDone(true)
    }

    function handleAddTag(tag: string) {
        const wasAdded = tags.find((addedTag) => addedTag === tag)
        if (wasAdded) return
        setTags([...tags, tag])
    }

    function handleDeleteTag(tagToDelete: string) {
        const newTags = tags.filter((tag) => tag !== tagToDelete)
        setTags(newTags)
    }

    async function handleGenerateDescriptionWithGemini(): Promise<string | null> {

        setIsTypingDone(false)

        if (valuesForDescription[0].length && valuesForDescription[1] && valuesForDescription[1].length) {
            const prompt = `Use this title for a product (${valuesForDescription[0]}) and this brand name (${valuesForDescription[1]}) to come up with a description for the product with an emphazis in key characteristics suitable for selling the product, answer with only the description and use a maximum of 200 characters.`
            const generation = await generateWithGemini(prompt)
            setGeneratedDescription(generation)
            return generation
        } else if (valuesForDescription[0].length) {
            const prompt = `Use this title for a product (${valuesForDescription[0]}) to come up with a description for the product with an emphazis in key characteristics suitable for selling the product, answer with only the description and use a maximum of 200 characters.`
            const generation = await generateWithGemini(prompt)
            setGeneratedDescription(generation)
            return generation
        }

        return null
    }

    async function handleGenerateTagsWithGemini() {

        if (descriptionAdded[0].length) {
            const prompt = `Use this product description (${descriptionAdded[0]}) to come up with 5 categories for the product to be used as tags, but answer with only the categories separated by commas.`
            const generation = await generateWithGemini(prompt)
            const generatedList = generation.split(',')
            setGeneratedTags(generatedList.map(tag => tag.trim()))
            return
        }
    }

    useEffect(() => {
        if (generatedDescription.length) {
            setValue('description', generatedDescription)
        }
    }, [generatedDescription])

    useEffect(() => {
        if (wasSubmitted) {
            setGeneratedDescription('')
            setGeneratedTags([])
        }
    }, [wasSubmitted])

    return (
        <div className='w-2/3 h-full min-h-[436px] flex flex-col gap-y-7 pr-5'>
            <div className="flex gap-x-2">
                <div className="w-full flex flex-col gap-y-2">
                    <div className="flex flex-col gap-y-1">
                        <label className='text-[0.8rem]' htmlFor="title">Title</label>
                        <input
                            {...register('title')}
                            type="text"
                            className={`w-full h-10 text-[0.9rem] bg-gray-50 rounded-[6px] border border-gray-300 ring-0 focus:ring-0 focus:outline-none px-2 placeholder-sym_gray-500 ${errors.title !== undefined ? 'ring-1 ring-red-500' : ''}`}
                            placeholder='Title'
                        />
                    </div>
                    {errors.title && <small className="text-red-500">{errors.title.message}</small>}
                </div>
                <div className="w-full flex flex-col gap-y-2">
                    <div className="flex flex-col gap-y-1">
                        <label className='text-[0.8rem]' htmlFor="brand">Brand</label>
                        <input
                            {...register('brand')}
                            type="text"
                            className={`w-full h-10 text-[0.9rem] bg-gray-50 rounded-[6px] border border-gray-300 ring-0 focus:ring-0 focus:outline-none px-2 placeholder-sym_gray-500 ${errors.brand !== undefined ? 'ring-1 ring-red-500' : ''}`}
                            placeholder='Brand'
                        />
                    </div>
                    {errors.brand && <small className="text-red-500">{errors.brand.message}</small>}
                </div>
            </div>

            <div className="relative flex flex-col gap-y-2">
                <div className="relative flex flex-col gap-y-1">
                    <div className="relative flex gap-x-2 items-center">
                        <label className='text-[0.8rem] z-10' htmlFor="description">Description</label>
                        <i onClick={handleGenerateDescriptionWithGemini} className={`relative fa-solid fa-brain group ${animatedGradientText} hover:bg-gray-100 cursor-pointer`}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.5, type: 'spring' }}
                                className='hidden absolute top-1 left-3 w-[150px] z-50 group-hover:flex transition-all duration-200 bg-white shadow-md border rounded-[6px] p-2'>
                                <p className='text-[1rem] font-normal font-body text-[#10100e]'>Generate with A.I.</p>
                            </motion.div>
                        </i>
                    </div>
                    <textarea
                        {...register('description')}
                        className={`z-10 w-full h-20 text-[0.9rem] ${isTypingDone ? '' : 'text-white'} bg-gray-50 rounded-[6px] border border-gray-300 ring-0 focus:ring-0 focus:outline-none px-2 placeholder-sym_gray-500 ${errors.description !== undefined ? 'ring-1 ring-red-500' : ''}`}
                        placeholder='Description'
                        onBlur={handleGenerateTagsWithGemini}
                    />
                    {
                        !isTypingDone && generatedDescription !== '' && (
                            <>
                                <ReactTyped
                                    className='z-10 absolute top-8 left-2 h-20 line-clamp-2 text-[0.9rem] w-[800px]'
                                    typeSpeed={10}
                                    showCursor={false}
                                    onComplete={handleTypingEnd}
                                    strings={[generatedDescription]}
                                />
                            </>
                        )
                    }
                </div>
                {errors.description && <small className="text-red-500">{errors.description.message}</small>}
            </div>

            <div className="flex flex-col gap-y-2">
                <AddTagsComponent
                    tags={tags}
                    wasSubmitted={wasSubmitted}
                    handleAddTag={handleAddTag}
                    generatedTags={generatedTags}
                    handleDeleteTag={handleDeleteTag}
                    handleGenerateTagsWithGemini={handleGenerateTagsWithGemini}
                />
            </div>

            <div className="flex gap-x-2">
                <div className="w-full flex flex-col gap-y-2">
                    <div className="relative flex flex-col gap-y-1">
                        <label className='text-[0.8rem]' htmlFor="image">Image</label>
                        <input
                            disabled
                            {...register('image')}
                            type="text"
                            className={`w-full h-10 text-[0.9rem] bg-gray-50 rounded-[6px] border border-gray-300 ring-0 focus:ring-0 focus:outline-none pl-2 pr-10 truncate placeholder-sym_gray-500 ${errors.image !== undefined ? 'ring-1 ring-red-500' : ''}`}
                            placeholder='Image'
                        />
                        {
                            cloudinaryFileUpload && <i onClick={() => { handleCopyToClipboard(cloudinaryFileUpload, 'URL copied to clipboard.') }} className="absolute top-8 right-2 hover:text-indigo-500 active:text-[#10100e] cursor-pointer transition-color duration-200 fa-solid fa-clipboard"></i>
                        }
                    </div>
                    {errors.image && <small className="text-red-500">{errors.image.message}</small>}
                </div>
                <div className="flex flex-col gap-y-2 justify-center items-center">
                    <div className="flex flex-col gap-y-1 justify-center items-center">
                        <label className='text-[0.8rem]' htmlFor="compress">Compress</label>
                        <div className="inline-flex items-center">
                            <label className="flex items-center cursor-pointer relative">
                                <input
                                    name='compress'
                                    value={compress}
                                    onChange={() => { setCompress(compress === 1 ? 0 : 1) }}
                                    type="checkbox"
                                    defaultChecked
                                    className="peer h-10 w-10 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-indigo-500 checked:border-indigo-500" id="check1" />
                                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-x-2">
                <div className="w-full flex flex-col gap-y-2">
                    <div className="flex flex-col gap-y-1">
                        <label className='text-[0.8rem]' htmlFor="weight">Weight</label>
                        <input
                            {...register('weight')}
                            className={`w-full h-10 text-[0.9rem] bg-gray-50 rounded-[6px] border border-gray-300 ring-0 focus:ring-0 focus:outline-none px-2 placeholder-sym_gray-500 ${errors.weight !== undefined ? 'ring-1 ring-red-500' : ''}`}
                            placeholder='Price'
                        />
                    </div>
                    {errors.weight && <small className="text-red-500">{errors.weight.message}</small>}
                </div>

                <div className="w-full flex flex-col gap-y-2">
                    <div className="flex flex-col gap-y-1">
                        <label className='text-[0.8rem]' htmlFor="height">Height</label>
                        <input
                            {...register('height')}
                            className={`w-full h-10 text-[0.9rem] bg-gray-50 rounded-[6px] border border-gray-300 ring-0 focus:ring-0 focus:outline-none px-2 placeholder-sym_gray-500  ${errors.height !== undefined ? 'ring-1 ring-red-500' : ''}`}
                        />
                    </div>
                    {errors.height && <small className="text-red-500">{errors.height.message}</small>}
                </div>

                <div className="w-full flex flex-col gap-y-2">
                    <div className="flex flex-col gap-y-1">
                        <label className='text-[0.8rem]' htmlFor="width">Width</label>
                        <input
                            {...register('width')}
                            className={`w-full h-10 text-[0.9rem] bg-gray-50 rounded-[6px] border border-gray-300 ring-0 focus:ring-0 focus:outline-none px-2 placeholder-sym_gray-500  ${errors.width !== undefined ? 'ring-1 ring-red-500' : ''}`}
                        />
                    </div>
                    {errors.width && <small className="text-red-500">{errors.width.message}</small>}
                </div>

                <div className="w-full flex flex-col gap-y-2">
                    <div className="flex flex-col gap-y-1">
                        <label className='text-[0.8rem]' htmlFor="length">Length</label>
                        <input
                            {...register('length')}
                            className={`w-full h-10 text-[0.9rem] bg-gray-50 rounded-[6px] border border-gray-300 ring-0 focus:ring-0 focus:outline-none px-2 placeholder-sym_gray-500  ${errors.length !== undefined ? 'ring-1 ring-red-500' : ''}`}
                        />
                    </div>
                    {errors.length && <small className="text-red-500">{errors.length.message}</small>}
                </div>
            </div>
            <div className="flex flex-col gap-y-2">
                <div className="flex gap-x-2">
                    <div className="w-full flex flex-col gap-y-2">
                        <div className="flex flex-col gap-y-1">
                            <label className='text-[0.8rem]' htmlFor="price">Price</label>
                            <input
                                {...register('price')}
                                className={`w-full h-10 text-[0.9rem] bg-gray-50 rounded-[6px] border border-gray-300 ring-0 focus:ring-0 focus:outline-none px-2 placeholder-sym_gray-500 ${errors.price !== undefined ? 'ring-1 ring-red-500' : ''}`}
                                placeholder='Price'
                            />
                        </div>

                    </div>

                    <div className="w-full flex flex-col gap-y-2">
                        <div className="flex flex-col gap-y-1">
                            <label className='text-[0.8rem]' htmlFor="discount">{'Discount (optional)'}</label>
                            <input
                                {...register('discount')}
                                className={`w-full h-10 text-[0.9rem] bg-gray-50 rounded-[6px] border border-gray-300 ring-0 focus:ring-0 focus:outline-none px-2 placeholder-sym_gray-500`}
                            />
                        </div>

                    </div>

                    <div className="w-full flex flex-col gap-y-2">
                        <div className="flex flex-col gap-y-1">
                            <label className='text-[0.8rem]' htmlFor="quantity">Quantity</label>
                            <input
                                {...register('quantity')}
                                className={`w-full h-10 text-[0.9rem] bg-gray-50 rounded-[6px] border border-gray-300 ring-0 focus:ring-0 focus:outline-none px-2 placeholder-sym_gray-500 ${errors.quantity !== undefined ? 'ring-1 ring-red-500' : ''}`}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-1">
                    {errors.price && <small className="text-red-500">{errors.price.message}</small>}
                    {errors.discount && <small className="text-red-500">{errors.discount.message}</small>}
                    {errors.quantity && <small className="text-red-500">{errors.quantity.message}</small>}
                </div>
            </div>

            <div className="flex flex-col gap-y-2">
                <div className="flex flex-col gap-y-1">
                    <label className='text-[0.8rem]' htmlFor="priceWithDiscount">Price with discount</label>
                    <input
                        disabled
                        value={priceWithDiscount}
                        type="number"
                        className={`w-full h-10 text-[0.9rem] bg-gray-50 rounded-[6px] border border-indigo-500 ring-0 focus:ring-0 focus:outline-none px-2 placeholder-sym_gray-500`}
                    />
                </div>
            </div>

        </div>
    )
}

export default IndividualProductForm