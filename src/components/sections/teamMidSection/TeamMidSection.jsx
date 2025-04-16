import TeamPageMidList from "../../CardList/teamPageList/TeamPageMidList";

export default function TeamMidSection() {
  return (
    <section className="flex flex-col items-center pt-5 gap-5">
      <h2 className="text-[40px] w-[302px] text-center font-bold">Meet Our Team</h2>
      <TeamPageMidList />
    </section>
  );
}
