'use client';
import Button from '@/components/atoms/button';
import TextArea from '@/components/atoms/textArea';
import TextInput from '@/components/atoms/textInput';
import FormHeader from '@/components/molecules/formHeader';
import React from 'react';

const Form = () => {
  return (
    <div className="bg-black  p-14 rounded-3xl">
      <div className="mx-68px">
        <FormHeader />
      </div>
      <div className="mt-20">
        <TextInput
          value={''}
          onChange={(e) => console.log(e.target.value)}
          placeholder={'Enter your name'}
          title={'Name'}
        />
        <TextInput
          value={''}
          onChange={(e) => console.log(e.target.value)}
          placeholder={'Enter your email'}
          title={'Email'}
        />
        <TextInput
          value={''}
          onChange={(e) => console.log(e.target.value)}
          placeholder={'Enter your company name'}
          title={'Company'}
        />
        <TextArea
          value={''}
          onChange={(e) => console.log(e.target.value)}
          placeholder={'Describe'}
          title={'Message'}
        />
      </div>
      <div className="mt-4">
        <Button
          buttonType={'orange'}
          height="h-[52px]"
          title={'Send'}
          onPress={() => console.log('pressed')}
        />
      </div>
    </div>
  );
};

export default Form;
