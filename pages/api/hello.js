// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ScrapeInsta from 'scrape-insta'
export default (req, res) => {
  res.statusCode = 200
  //res.json({ name: 'John Doe' })
  const InstaClient = new ScrapeInsta();
  /*InstaClient.authBySessionId('44487451032:GjpfDVPZKAIxYv:16')
  .then(account => res.json(account))
  .catch(err => console.error(err));*/
  (async () => {
    const x = await InstaClient.getHashtagPosts('meishacatalog', 3).then(posts => {
        res.json(posts)
        console.log(posts.nextPageId);
      })
      .catch(err => console.error(err));

    //console.log(x.nextPageId);
  })();
}
