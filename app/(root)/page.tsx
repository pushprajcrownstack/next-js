import React from "react";
// import { SearchForm } from "../../components/SearchForm";
// import StartupCardType from "../../components/StartupCardType";
import Login from "../pages/login/page";

async function Home({ }: { searchParams: Promise<{ query?: string }> }) {

  return (
    <>
      <Login ></Login>
      {/* <section className="pink_container">
        <h1 className="heading">Pitch your startup, <br /> Connect with Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Picthes and Get Noticed in Virtual Competitions</p>
        <SearchForm query={query as string} />
      </section>
      <section className="section-container">
        <p className="text-30-semibold">
          {query ? `Search results for the ${query}` : 'All results'}
        </p>
        <ul className="mt-7 card-grid">
          {
            posts.length > 0 ? posts.map((post, index) => (<StartupCardType key={post._id} post={post} />)) : (<p className="no-results">No startup found.</p>)
          }
        </ul>
      </section> */}
    </>
  );
}

export default Home;
