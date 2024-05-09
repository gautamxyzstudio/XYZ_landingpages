import { Poppins, Chau_Philomene_One } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin-ext'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const chau_philomene = Chau_Philomene_One({
  subsets: ['latin-ext'],
  weight: ['400'],
});
