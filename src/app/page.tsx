import Link from 'next/link';

export default function Home() {
	return (
		<>
			<h1>Home Page - Tools</h1>
			<Link href="/base64Converter">Base64 Converter</Link>
		</>
	);
}
