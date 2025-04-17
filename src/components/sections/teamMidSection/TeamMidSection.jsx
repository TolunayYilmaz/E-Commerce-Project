import TeamPageMidList from "../../CardList/teamPageList/TeamPageMidList";

export default function TeamMidSection() {
  return (
    <section className="flex flex-col items-center gap-5 sm:w-full">
      <h2 className="text-[40px] w-[302px] text-center font-bold sm:w-full">Meet Our Team</h2>
      <TeamPageMidList />
    </section>
  );
}
