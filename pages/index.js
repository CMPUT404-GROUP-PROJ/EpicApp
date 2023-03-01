import Head from 'next/head';

//components
import Stream from '@epicapp/components/Stream/Stream.jsx';
import Card from '@epicapp/components/Card';
import LeftSidebar from '@epicapp/components/Navigation/LeftSidebar.jsx';
import RightSidebar from '@epicapp/components/Navigation/RightSidebar.jsx';
import CreatePost from '@epicapp/components/CreatePost/CreatePost.jsx';
import Signin from '@epicapp/components/SignIn/Signin';

export default function Home() {
  // const inbox = [
  //   {
  //     id: 123,
  //     author: 'Samir Raza',
  //     privacy: 'public',
  //     type: 'text',
  //     text: 'This is text for a post',
  //     likes: 10,
  //     comments: [
  //       {
  //         commenterId: 12,
  //         commentText: 'This is a comment',
  //       },
  //       {
  //         commenterId: 21,
  //         commentText: 'This is another comment',
  //       },
  //     ],
  //   },
  // ];
  return (
    <>
      <Head>
        <title>Epic App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
        <Signin/>
        {/* <Stream inbox={inbox} /> */}
      </main>
    </>
  );
  //   <div className="flex mt-4 max-w-6xl mx-auto gap-6">
  //     <div className="w-1/5">
  //       <LeftSidebar />  
  //     </div>
  //     <div className="grow">
  //       <CreatePost />
  //       <Card>inbox stream...</Card>
  //     </div>
  //     <div className="w-1/5">
  //       <RightSidebar />  
  //     </div>
  //   </div> 
  // )
}
