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
					<Link className="button button--primary" to="/docs/client">
						Publishing to Eik
					</Link>
					<Link className="button button--link" to="/docs/server">
						Hosting an Eik server
					</Link>
					<Link className="button button--link" to="/docs/overview">
						Why Eik?
					</Link>
				</div>
			</div>
		</Layout>
	);
}

export default Home;
