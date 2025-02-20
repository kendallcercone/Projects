import SearchInput from "../../components/SearchInput";

const Search = ({ label, placeholder }) => {
    return (
      <div className="flex flex-col w-full ">
        <h2 className="text-4xl">Search</h2>
            <SearchInput />
        </div>
    );
};

export default Search;
