import React, { useState, useEffect } from 'react';
import { Loader, Flex, ThemeProvider, Theme } from '@aws-amplify/ui-react';



export const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
         <div class="font-extrabold text-2xl  mb-3"> <span class=" text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden">
    <ul class="block animate-text-slide text-left leading-tight [&_li]:block">
        <li>Adjusting the fitting room mirrors...</li>
        <li>Summoning the virtual tailor...</li>
        <li>Choosing the right thread...</li>
        <li>Sewing the pixels together...</li>
        <li>Smoothing out the wrinkles...</li>
        <li aria-hidden="true">Adjusting the fitting room mirrors...</li>
    </ul>
</span></div>
         <div className='w-1/2'>
         <Loader
                size="large"
                variation="linear"
                filledColor="#4F46E5"
            />
            </div>
        </div>
    );
};