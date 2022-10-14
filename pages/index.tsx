import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const title = 'Чат поверх канваса';
const description = 'Тестирует открытие чата поверх канваса. Выберите нужный саджест';

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
