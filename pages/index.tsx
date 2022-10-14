import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const title = 'Чат поверх канваса';
const description = 'Протестируйте реакцию поверхности на различные типы новых сообщений. Для этого выберите нужный саджест.';

const Home: NextPage = () => (
	<div className={styles.container}>
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<main className={styles.main}>
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.description}>{description}</p>
		</main>
	</div>
);

export default Home;
