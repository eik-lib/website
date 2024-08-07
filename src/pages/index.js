import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function Home() {
	const context = useDocusaurusContext();
	const { siteConfig = {} } = context;
	const logo = useBaseUrl("img/eik-logo-main.svg");
	return (
		<Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
			<div className={classnames("hero hero--primary", styles.heroBanner)}>
				<div className="container">
					<div className="text--center">
						<img
							className={styles.featureTop}
							src={logo}
							alt={siteConfig.title}
						/>
					</div>
				</div>
			</div>
			<div className={styles.cta}>
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.indexCtas}>
					<Link
						className="button button--primary"
						to="/docs/introduction/workflow/"
					>
						Get started using Eik
					</Link>
				</div>
				<p className={styles.pitch}>
					Eik provides{" "}
					<Link to="/docs/introduction/#the-problem-eik-solves">
						performant code reuse
					</Link>{" "}
					in multi-page and micro-frontend web applications by leveraging both
					the browser and ES module caches . Host shared ES modules in a central
					location and use semantically versioned aliases to shorten JavaScript
					load and execution times.
				</p>
				<img
					alt="An illustration of a user journey across three pages all using the same version of Lit hosted on Eik, leveraging the browser and ES module cache"
					src="/img/overview_page_to_page_same_versions.min.svg"
				/>
				<p className={styles.pitch}>
					Click the links below to learn more about the problem Eik solves and
					how to host your own Eik server.
				</p>
				<div className={styles.learnMoreCtas}>
					<Link to="/docs/introduction/">Introduction to Eik</Link>
					<Link to="/docs/server/">Setting up an Eik server</Link>
				</div>
			</div>
		</Layout>
	);
}

export default Home;
