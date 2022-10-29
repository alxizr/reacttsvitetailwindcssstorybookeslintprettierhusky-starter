import example from "./assets/example.svg";

const App = () => {
	return (
		<div className="bg-green-500">
			<h1 className="font-bold text-red-200 text-xl text-center">welcome</h1>
			<img
				src={example}
				alt="example svg"
				className="w-16 h-16 align-middle text-center m-auto"
			/>
		</div>
	);
};

export default App;
