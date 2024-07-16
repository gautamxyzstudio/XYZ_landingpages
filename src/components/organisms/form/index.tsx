'use client';
import Button from '@/components/atoms/button';
import TextArea from '@/components/atoms/textArea';
import TextInput from '@/components/atoms/textInput';
import FormHeader from '@/components/molecules/formHeader';
import Image from 'next/image';
import React, { useState } from 'react';
import { ASTRONAUT_MOON } from '../../../../public/exporter';

const Form = () => {
  const [state, dispatch] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  return (
    <div className=" mx-6   bg-[#121212] md-bg-black  shadow-2xl sm:mx-0 max-w-[1240px] sm:w-full z-10 py-[32px]  px-[16px] sm:py-[40px] sm:px-[76px]  rounded-3xl">
      <div className="hidden sm:block">
        <FormHeader />
      </div>
      <div className=" mt-0  flex items-center sm:mt-[48px] flex justify-between flex-row">
        <div className="hidden lg:block">
          <Image
            className="w-[472px] h-[406px] md:w-[372px] md:h-[306px]"
            src={ASTRONAUT_MOON}
            alt="ASTRONAUT MOON"
          />
        </div>
        <div className="w-full  lg:w-6/12">
          <TextInput
            value={state.name}
            onChange={(e) =>
              dispatch((prev) => ({ ...prev, name: e.target.value }))
            }
            placeholder={''}
            title={'Name'}
          />
          <TextInput
            value={state.email}
            onChange={(e) =>
              dispatch((prev) => ({ ...prev, email: e.target.value }))
            }
            placeholder={''}
            title={'Email'}
          />
          <TextInput
            value={state.company}
            onChange={(e) =>
              dispatch((prev) => ({ ...prev, company: e.target.value }))
            }
            placeholder={''}
            title={'Company'}
          />
          <TextInput
            value={state.message}
            onChange={(e) =>
              dispatch((prev) => ({ ...prev, message: e.target.value }))
            }
            placeholder={''}
            title={'Message'}
          />
          <Button
            buttonType={'orange'}
            title={'Send'}
            widthSmall="w-[94px]"
            heightSmall="h-[32px]"
            width="sm:w-[180px]"
            height="sm:h-[48px]"
            onPress={() => console.log('pressed')}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
