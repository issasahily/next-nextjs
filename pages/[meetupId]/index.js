import { useRouter } from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
const DetailPage = (props) => {
  const idPage = useRouter();
  const myid = idPage.query.meetupId;
  // const { image, title, address, description } = props.selectedMeetup;
  // const id = props.selectedMeetup._id.toString();
  return (
    <>
      <MeetupDetail
        image={props.image}
        description={props.description}
        id={props.id}
        title={props.title}
        adress={props.address}
      />
      <Head>
        <title> Meetup Detail{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
    </>
  );
};
{
  /* <img
src="https://archello.s3.eu-central-1.amazonaws.com/images/2018/10/11/Contemporary-Modern-House-Design-6.1539270983.8601.jpg"
alt="Meetup image"
/>
<p>description</p>
<h2> "'meetup data '"</h2>
<h1>{props.id}</h1> */
}
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://issa:issayoussef@cluster0.p9ekjvo.mongodb.net/meetup?retryWrites=true&w=majority"
  );
  const db = client.db();
  const getMeetup = db.collection("mymeetup");
  const meetup = await getMeetup.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: true,
    paths: meetup.map((meet) => {
      return {
        params: {
          meetupId: meet._id.toString(),
        },
      };
    }),
    // paths: [
    //   {
    //     params: {
    //       meetupId: "m1",
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: "m2",
    //     },
    //   },
    // ],
  };
}
export async function getStaticProps(context) {
  const myid = context.params.meetupId;
  console.log(myid);
  const client = await MongoClient.connect(
    "mongodb+srv://issa:issayoussef@cluster0.p9ekjvo.mongodb.net/meetup?retryWrites=true&w=majority"
  );
  const db = client.db();
  const getMeetup = db.collection("mymeetup");
  const selectedMeetup = await getMeetup.findOne({ _id: new ObjectId(myid) });
  client.close();
  return {
    props: {
      id: selectedMeetup._id.toString(),
      image: selectedMeetup.image,
      title: selectedMeetup.title,
      description: selectedMeetup.description,
      adress: selectedMeetup.address,
    },
  };
}
export default DetailPage;
