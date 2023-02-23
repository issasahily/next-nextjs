import { useEffect, useState } from "react";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
const HomePage = (props) => {
  return (
    <>
      <Head>
        <title> React Meetup web</title>
        <meta name="description" content="webiste for meetup create by react" />
      </Head>
      <MeetupList meetups={props.meetup} />
    </>
  );
};
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetup: Dummy_Metup,
//     },
//   };
// }
export async function getStaticProps() {
  // const response = await fetch("/api/meetupForm");
  // const res = response.json();
  // console.log(res);
  // code there to send request to http to fetch the data .
  const client = await MongoClient.connect(
    "mongodb+srv://issa:issayoussef@cluster0.p9ekjvo.mongodb.net/meetup?retryWrites=true&w=majority"
  );
  const db = client.db();
  const getMeetup = db.collection("mymeetup");
  const meetup = await getMeetup.find().toArray();
  client.close();
  return {
    props: {
      meetup: meetup.map((met) => {
        return {
          title: met.title,
          image: met.image,
          address: met.address,
          id: met._id.toString(),
        };
      }),
    },
    revalidate: 5,
  };
}
export default HomePage;
