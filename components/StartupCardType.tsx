import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const StartupCardType = ({ post }: { post: any }) => {
    return (
        <li className='startup-card group'>
            <div className='flex-between'>
                <p className='startup-card-date'>
                    {formatDate(post?._createdAt)}
                </p>
                <div className='flex gap-1.5'>
                    <EyeIcon className='size-6 text-primary'></EyeIcon>
                    <span className='text-16-medium'>{post.views}</span>
                </div>
            </div>
            <div className='flex-between mt-4 gap-5'>
                <div className='flex-2'>
                    <Link href={`/users/${post.author?.id}`}>
                        <p className='text-16-medium line-clamp-1'>{post.author?.name}</p>
                    </Link>
                    <Link href={`/startup/${post?.id}`}>
                        <h3 className='text-16-medium line-clamp-1'>{post?.title}</h3>
                    </Link>
                </div>
                <Link href={`/startup/${post?.id}`}>
                    <Image className='rounded-full' src='https://placehold.co/48x48' width={48} height={48} alt='' />
                </Link>
            </div>
            <Link href={'/startup/?${}'}>
                <p className='startup-card-desc'>
                    {post.description}
                </p>
                <img src={post?.image} alt='placeholder' className='startup-card_img' />
            </Link>
            <div className='flex-between gap-3 mt-5'>
                <Link href={`/?query=${post.category}`}>
                    <p className='text-16-medium'>{post.category}</p>
                </Link>
                <Button className='startup-card_btn' asChild >
                    <Link href={`/startup/${post?.id}`} > Details</Link>
                </Button>
            </div>
        </li>
    )
}

export default StartupCardType