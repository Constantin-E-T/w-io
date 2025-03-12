'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ContainerLayout } from '@/components/layout/common/ContainerLayout';
import TextButton from '../ui/ActionButton';

export function HomePageCards() {
    return (
        <ContainerLayout>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Left Main Card */}
                <Card className="p-6 md:p-10 2xl:p-[50px] flex flex-col bg-white/55 backdrop-blur-[17.5px] border border-white/50 rounded-[15px]">
                    <CardContent className="p-0 w-full h-full flex flex-col">
                        {/* Small heading - left aligned */}
                        <p className="uppercase text-[#101828] font-bold text-[14px] sm:text-[18px] font-poppins leading-[26px] tracking-[1.55px] flex items-center w-full">
                            <span>SEEK</span>
                            <span className="text-[20px] sm:text-[30px] mx-[-4px] sm:mx-[-7px]">・</span>
                            <span>CHALLENGE</span>
                            <span className="text-[20px] sm:text-[30px] mx-[-4px] sm:mx-[-7px]">・</span>
                            <span>PLAY</span>
                        </p>

                        {/* Main content with proper spacing */}
                        <div className="mt-6 sm:mt-[36px]">
                            {/* Main heading with proper styling - left aligned */}
                            <h1 className="text-[#141548] font-poppins font-extrabold text-[30px] sm:text-[36px] md:text-[42px] xl:text-[48px] leading-[1.2] sm:leading-[58px] tracking-[-0.024px]">
                                Your Pickup Game<br />
                                Starts Here
                            </h1>

                            {/* First paragraph with responsive gap */}
                            <p className="mt-4 sm:mt-[16px] text-[#141548] font-poppins text-[16px] sm:text-[18px] lg:text-[20px] font-semibold leading-[1.6] lg:leading-[32px] tracking-[-0.06px] self-stretch">
                                Everyone gets a Wallet, a Map, Chat and a PlayerProfile.
                            </p>
                            
                            {/* Second paragraph with responsive gap */}
                            <p className="mt-4 sm:mt-[16px] text-[#141548] font-poppins text-[16px] sm:text-[18px] lg:text-[20px] font-semibold leading-[1.6] lg:leading-[32px] tracking-[-0.06px] self-stretch">
                                Your world of pickup games, players and courts.
                            </p>
                            
                            {/* Sign Up button */}
                            <div className="mt-6 sm:mt-[34px]">
                                <TextButton
                                    text="Sign Up Free Forever"
                                    icon="/icons/common/ArrowForwardIcon.svg"
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Right Main Card */}
                <Card className="p-6 md:p-10 2xl:p-[50px] flex flex-col items-start bg-white/55 backdrop-blur-[17.5px] border border-white/50 rounded-[15px]">
                    <CardContent className="p-0 w-full h-full">
                        {/* FOR ORGANIZERS Section */}
                       

                        {/* FOR PLAYERS Section */}

                    </CardContent>
                </Card>
            </div>
        </ContainerLayout>
    );
}

export default HomePageCards;