# hello-DNS

Project for my assignment for Module 5: **Back-end - DNS**

- Go to the [guide](https://io.tskoli.dev/guides/61d469a2c387a90009ad3a22)

## The assignment

- I used the domain name I own **ggcom.fr** for this assignment

- I used **Google Dig** to get the IP adress for **tskoli.is**:
  ![Screenshot Google Dig for tskoli.is](https://github.com/tristan-sch/hello-DNS/blob/main/Screenshots/Tskoli.png)

- Then, using **cPanel**, I created 2 new DNS records: a **CNAME** record and a **A** record, both pointing to tskoli IP adress:
  ![Screenshot cPanel](https://github.com/tristan-sch/hello-DNS/blob/main/Screenshots/cPanel.png)

- Finally, I verified on **Google Dig** that it worked:
  ![Screenshot demo.ggcom.fr](https://github.com/tristan-sch/hello-DNS/blob/main/Screenshots/demo.png)
  ![Screenshot demo2.ggcom.f](https://github.com/tristan-sch/hello-DNS/blob/main/Screenshots/demo2.png)

## Resources

- [An Introduction to Learning and Using DNS Records](https://code.tutsplus.com/tutorials/an-introduction-to-learning-and-using-dns-records--cms-24704)
- [cPanel](https://cpanel.net/)
- [Google Dig](https://toolbox.googleapps.com/apps/dig/)
