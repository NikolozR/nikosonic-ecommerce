'use client'
import Image from "next/image"
import NewsFeed1 from '../../../public/newsFeed1.jpeg'
import NewsFeed2 from '../../../public/newsfeed2.jpeg'
import NewsFeed3 from '../../../public/newsfeed3.jpeg'
import NewsFeed4 from '../../../public/newsfeed4.jpeg'
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"

function NewsFeed() {
    const t = useTranslations('Newsfeed')
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="pb-[40px]"
        >
            <div className="container">
                <div className="py-[40px]">
                    <h1 className="text-[#6C7275] font-bold text-[1rem] text-center mb-[16px]">{t('head')}</h1>
                    <h4 className="font-poppins font-medium text-[2.5rem] leading-[44px] text-center dark:text-[#ECEDEE]" style={{ letterSpacing: '-0.4px' }}>{t('ig')}</h4>
                    <p className="text-[1.125rem] text-[#121212] mt-[16px] leading-[32px] text-center dark:text-[#ECEDEE]">{t('sub')}</p>
                    <a href="https://www.instagram.com/nika_rusishvili/" target="_blank" className="text-[#6C7275] block text-center w-fit mx-auto font-poppins font-medium text-[1.125rem] leading-[28px] mt-[16px]">nika_rusishvili</a>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-[24px]">
                    <div className="h-[262px] relative">
                        <Image src={NewsFeed1} fill className="object-cover" alt="NewsFeed Placeholders"></Image>
                    </div>
                    <div className="h-[262px] relative">
                        <Image src={NewsFeed2} fill className="object-cover" alt="NewsFeed Placeholders"></Image>
                    </div>
                    <div className="h-[262px] relative">
                        <Image src={NewsFeed3} fill className="object-cover" alt="NewsFeed Placeholders"></Image>
                    </div>
                    <div className="h-[262px] relative">
                        <Image src={NewsFeed4} fill className="object-cover" alt="NewsFeed Placeholders"></Image>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default NewsFeed