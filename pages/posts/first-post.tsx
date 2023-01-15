import Link from "next/link";

export default function FirstPost() {
	return (
		<>
			<h1 className="text-blue-600">First Post</h1>
			<h2>
				<Link href="/">Back to Home</Link>
			</h2>
		</>
	);
}
