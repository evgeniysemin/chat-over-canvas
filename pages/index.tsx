import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const title = 'Чат поверх канваса';

const Home: NextPage = () => (
	<div className={styles.container}>
		<Head>
			<title>{title}</title>
			<meta name="description" content="Протестируйте реакцию поверхности на различные типы новых сообщений" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<main className={styles.main}>
			<h1 className={styles.title}>{title}</h1>
			<p className={styles.description}>
				Протестируйте реакцию поверхности на различные типы новых сообщений. <br />
				Для этого выберите нужный саджест.
			</p>
		</main>
	</div>
);

export default Home;
