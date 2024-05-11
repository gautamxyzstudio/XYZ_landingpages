import Header from '@/components/atoms/header';
import React from 'react';
import Intro from './components/Intro';
import About from './components/about';
import Info from './components/Info';
import FormView from './components/formView';
import Services from './components/services';

const Web = () => {
  return (
    <div>
      <div className="w-full md:pl-20 pl-10 rounded-s-2xl bg-primary">
        <Header />
        <div className="w-full md:mt-5">
          <Intro />
        </div>
      </div>
      <div className="w-full">
        <About />
      </div>
      <div className="ml-20 mt-128px mb-72px">
        <Info />
      </div>
      <div>
        <Services />
      </div>
      <div className="my-124px mx-20">
        <FormView />
      </div>
    </div>
  );
};

export default Web;
