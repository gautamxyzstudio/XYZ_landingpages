'use client';
import { chau_philomene } from '@/ui/fonts';
import React, { memo, useEffect, useMemo, useReducer, useState } from 'react';
import ModalTextInput from './components/modalTextInput';
import Image from 'next/image';
import {
  ASTRONAUT_WAVING,
  CROSS,
  FRAME_BOTTOM,
  STAR_BG,
} from '../../../../public/exporter';
import Button from '@/components/atoms/button';

// Initial state for the form
const initialState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

// Reducer function to manage form state
const reducer = (state: any, action: { type: any; field: any; value: any }) => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const CustomModal = () => {
  const [isModalVisible, updateIsModalVisible] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const modalShown = sessionStorage.getItem('modalShown');
    if (!modalShown) {
      const timer = setTimeout(() => {
        updateIsModalVisible(true);
        sessionStorage.setItem('modalShown', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const modalMainStyles = useMemo(
    (): {
      position: any;
      bottom: number;
      right: number;
    } => ({
      position: 'absolute',
      bottom: -28,
      right: -25,
    }),
    []
  );

  const onClose = () => updateIsModalVisible(false);

  const dynamicStyles = `fixed inset-0 flex items-center justify-center bg-[#00000080] z-[11]`;
  const dynamicStyles2 = `fixed inset-0 flex hidden items-center justify-center bg-[#00000080] z-[11]`;

  return (
    <div className={isModalVisible ? dynamicStyles : dynamicStyles2}>
      <div className="w-[846px] h-[565px] flex overflow-hidden rounded-lg bg-[#FAFAFA]">
        <div className="w-[55%] p-6">
          <h1
            className={`text-blackText text-[24px] leading-7 ${chau_philomene.className}`}
          >
            Get in Touch
          </h1>
          <p className="text-grey font-regular text-xs leading-6">
            Feel free to drop your details
          </p>
          <div className="mt-6 pr-[10px] relative">
            <ModalTextInput
              value={state.name}
              onChange={(e) =>
                dispatch({
                  type: 'SET_FIELD',
                  field: 'name',
                  value: e.target.value,
                })
              }
              placeholder={''}
              title={'Name'}
            />
            <ModalTextInput
              value={state.email}
              onChange={(e) =>
                dispatch({
                  type: 'SET_FIELD',
                  field: 'email',
                  value: e.target.value,
                })
              }
              placeholder={''}
              title={'Email'}
            />
            <ModalTextInput
              value={state.phone}
              onChange={(e) =>
                dispatch({
                  type: 'SET_FIELD',
                  field: 'phone',
                  value: e.target.value,
                })
              }
              placeholder={''}
              title={'Phone Number'}
            />
            <div className="mb-4">
              <p className="text-blackText text-[16px] leading-5 font-medium">
                Message
              </p>
              <textarea
                value={state.message}
                onChange={(e) =>
                  dispatch({
                    type: 'SET_FIELD',
                    field: 'message',
                    value: e.target.value,
                  })
                }
                className="mt-[5px] h-[90px] border-[1px] border-[#DBDBDB] resize-none outline-none w-full rounded-lg py-3 px-3 flex-1"
                title="Message"
                rows={3}
              />
            </div>
            <Button
              height={'sm:h-[48px]'}
              buttonType={'orange'}
              title={'Send'}
              onPress={() => console.log('Form submitted:', state)}
            />
            <Image
              style={modalMainStyles}
              priority
              src={FRAME_BOTTOM}
              alt="FRAME BOTTOM"
            />
          </div>
        </div>
        <div className="w-[45%] relative flex justify-center items-center">
          <Image
            fill
            priority
            className="rounded-tl-[110px]"
            src={STAR_BG}
            alt="CROSS"
          />
          <Image
            onClick={onClose}
            className="absolute top-6 right-6 cursor-pointer"
            src={CROSS}
            alt="CROSS"
          />
          <Image
            priority
            className="absolute"
            width={194}
            height={248}
            src={ASTRONAUT_WAVING}
            loading="eager"
            alt="ASTRONAUT WAVING"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(CustomModal);
