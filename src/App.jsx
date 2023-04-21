import AddModal from "./components/AddModal";
import UsersTable from "./components/UsersTable";
import { UsersProvider } from "./context/users/Provider";

function App() {
	return (
		<UsersProvider>
			<AddModal />
			<UsersTable />
		</UsersProvider>
	);
}

export default App;
