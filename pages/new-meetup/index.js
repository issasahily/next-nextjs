import Head from "next/head";
import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
const newMeetupPage = () => {
  const route = useRouter();
  async function addMeetupHandler(entredMeetup) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(entredMeetup),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();

    console.log(data);
    route.push("/");
  }

  return (
    <>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
      <Head>
        <title> Add your Meetup </title>
        <meta name="description" content="add your favorite meetup" />
      </Head>
    </>
  );
};

export default newMeetupPage;
