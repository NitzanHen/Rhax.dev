import { NextPage } from 'next';
import Head from 'next/head';
import { ApiPage } from '../../../../components/ApiPage';
import { TopBar } from '../../../../components/TopBar';
import api from '../../../../rhax.api';

const FilterPage: NextPage = () => {
  const exports = api["core/filter.ts"];

  return (
    <>
      <Head>
        <title>Rhax docs - filter</title>
      </Head>
      <TopBar />
      <ApiPage source={"core/filter.ts"} exports={exports} />
    </>
  );
};

export default FilterPage;