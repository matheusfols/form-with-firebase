import FormContact from "@/components/formContact";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="col-2">
        <FormContact />
      </div>
    </div>
  );
};

export default Home;
