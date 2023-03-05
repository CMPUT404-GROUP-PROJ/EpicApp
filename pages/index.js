import Head from 'next/head';

//components
import HomeLayout from '@epicapp/layouts/HomeLayout';
import Profile from '@epicapp/components/Home/Profile';

export default function SigninPage() {
  return (
    <>
      <Head>
        <title>Epic App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-screen">
        <HomeLayout route="HOME">
          <div className="grid grid-cols-4 gap-4">
            <section className="col-span-1 w-full">
              <Profile />
            </section>
            <section className="col-span-3">
              {/* stream component ggoes here */}
            </section>
          </div>
        </HomeLayout>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  if (!context.req.headers.cookie?.includes('token=')) {
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };
  }
  return {
    props: {},
  };
}
