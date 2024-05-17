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
    <div className="bg-black max-w-[1240px]  w-full z-10  py-[40px]  px-[76px] rounded-3xl">
      <FormHeader />
      <div className="mt-[48px] flex justify-between flex-row">
        <Image src={ASTRONAUT_MOON} alt="ASTRONAUT MOON" />
        <div className="w-6/12">
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
            width="w-[180px]"
            height="h-[56px]"
            onPress={() => console.log('pressed')}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
