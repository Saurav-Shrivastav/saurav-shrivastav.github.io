# Experience and Skills
---

### Contents

- [Professional Experiences](#professional-experiences)
  - [Walldotapp - Backend Engineering Intern](#walldotapp)
  - [LinkedIn - Site Reliability Engineering Intern](#linkedin)
  - [Hallparty - Software Engineering Intern](#hallparty)
  - [CruXe.ai - Python/Django Developer](#cruxe)
  - [Cybersify - Backend & DevOps](#cybersify)
- [Open Source Contributions](#open-source-contributions)
  - PostgreSQL - Google Summer of Code
  - OpenWISP
- [Volunteering](#volunteering)
  - Lead - Google Developer Student Clubs
  - Teacher - Pratigya Abhiyan
  - Joint Secretary - MLSC
- [Technical Skills](#technical-skills)

---

# Professional Experiences

- ### **Walldotapp**
  **(November 2022 - Present)**

  **Skills:** Python, SQL, Django, DRF, PostgreSQL, AWS, Prometheus, Grafana, Celery, Redis, Traefik, Docker, Docker Compose

  - As a *Backend Engineering Intern* at [Wall](https://wall.app/), I have been actively contributing to the development of the [questing platform's](https://quest.wall.app/) backend using Django, the Django-REST framework, and PostgreSQL.
  - I have also been instrumental in dockerizing various projects at Wall, including the main questing platform backend and ETL pipeline. I wrote docker compose configurations using traefik as a reverse proxy for the dev, staging and prod environments.
  - To ensure the smooth functioning of the ETL pipeline, I set up monitoring using Celery flower, Prometheus, and Grafana.
  - In addition, I established a CI/CD pipeline using GitHub actions to test the code and facilitate its deployment to the staging environment and ultimately to production.
  - My efforts have also led to an improvement in the performance of the platform by modifying the initial database design and restructuring tables to reduce the complexity of queries.

- ### **LinkedIn**
  **(June 2022 - August 2022)**
  
  **Skills:** Flask, MySQL, ETL pipelines, Hive, Python, Hadoop, Azkaban, Fleet Management

  - I was a part of the GRID SRE team, which is responsible for the Hadoop infrastructure at LinkedIn. This infrastructure had around 41,000 hosts at that time.
  - Such a large infrastructure needed active monitoring to make sure that the hosts were reliable and working smoothly. I created a knowledge base of 11 internal resources and determined the flow of data for these resources that involved Azkaban workflows and Hadoop HDFS.
  - To improve accessibility and streamline data management, I developed a Flask-based REST API to provide quicker and easier access to the fleet management data without the need for complex query writing.

- ### **Hallparty**
  **(September 2021 - December 2021)**

  **Skills:** Kafka, Neo4J, Python, PostgreSQL, MongoDB, Linux, AWS S3

  - As a part of my role at [Hallparty](https://hallparty.app/), I was responsible for migrating the company's user data from PostgreSQL to MongoDB due to various business and product reasons. I successfully led this operation by writing a bunch of standalone Python scripts.
  - I was tasked with migrating Neo4J data from an older Kubernetes cluster to a newer one. To accomplish this, I wrote scripts to extract the data from the old cluster and transfer it to S3 using Kafka streams. I then pushed the collected data from S3 to the Neo4J instance in the new cluster using a similar approach.

- ### **CruXe**
  **(March 2021 - May 2021)**

  **Skills:** Python, Django

  - As a Python/Django developer, I developed a Django API for the product that interfaced with a Flask API running an ML model for summarization and a database for general data storage.
  - I optimized the controllers and implemented asynchronous processes to significantly reduce the response time of the initial API.
  - The product was successfully utilized by 40,000 users across more than 10 countries with a flawless performance record.

- ### **Cybersify**
  **(September 2020 - February 2021)**

  **Skills:** GraphQL(Graphene), Django, Django-channels, Docker, Travis CI, PostgreSQL

  - At Cybersify, I served as a Backend and DevOps Engineer, working on an application that enabled users to search for nearby gyms, schedule appointments, and purchase gym subscriptions from within the app.
  - I was a key player in the team responsible for developing a GraphQL API using Django-Graphene to handle multiple backend endpoints. I also designed and implemented database models using the Django ORM and PostgreSQL, adhering to best practices to achieve a test coverage of 90%.
  - I also built an asynchronous service using Redis, Graphene, and Django Channels.
  - To ensure smooth deployment, I set up Travis CI and Docker containerization for the project.

---

# Open Source Contributions

- ### **Google Summer of Code at PostgreSQL**
  - Project details on GSoC website can be accessed [here](https://summerofcode.withgoogle.com/projects/#5964100871389184).
  Details of my work are also available [here](https://blog.saurav-shrivastav.online/work-product-submission-for-gsoc21-project-improve-pgeu-system-for-conference-management).
  - [Organisation GitHub Link](https://github.com/pgeu)

- ### **OpenWISP**
  - [Organisation GitHub Link](https://github.com/openwisp).

---

# Volunteering

- ### **Lead at Google Developer Students Club**
  - As the Lead for the GDSC community at my college, I oversaw a core team of 40 people and a community of 1500+ student developers for a year.
  - During my tenure, I organized events for the community and successfully led multiple open source projects.

- ### **Student Teacher at Pratigya Abhiyan**
  - At Pratigya Abhiyan, I participated in teaching primary, secondary, and high school students from underprivileged sections of society located near the college.

- ### **Join Secretarty at MLSC**

---

# Technical Skills

**Languages:** Python, Golang, SQL, C/C++, JS, Solidity

**Databases:** PostgreSQL, MySQL, MongoDB, Redis, Prometheus

**Frameworks:** Django, Flask, FastAPI

**DevOps:** AWS, Docker, Docker Compose, Travis CI, GitHub Actions, Grafana, Git, Sentry

**Areas of Interest:** Backend Engineering, Site Reliability Engineering, DevOps Engineering, Blockchains
