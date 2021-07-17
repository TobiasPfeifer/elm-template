var apolloClient = require("apollo-client")
var apolloLinkWS = require('apollo-link-ws')
var apolloCacheInMemory = require("apollo-cache-inmemory")
var gql = require('graphql-tag')
var GRAPHQL_URI = 'localhost:8080/ws/graphql';

const getClient = () => {
  var wsLink = new apolloLinkWS.WebSocketLink({
    uri: `ws://${GRAPHQL_URI}`,
    options: {
      reconnect: true,
    }
  });
  var client = new apolloClient.ApolloClient({
    link: wsLink,
    cache: new apolloCacheInMemory.InMemoryCache({
      addTypename: true
    })
  });
  return client;
};

document.addEventListener("DOMContentLoaded", function () {
  var app = Elm.Main.init({ node: document.getElementById('main') })

  /* GraphQL subscriptions */

  /*
  app.ports.createTestSubscription.subscribe(function(data) {
    getClient().subscribe({
        query: gql`${data}`,
        variables: {}
      }).subscribe({
        next(resp) {
          var data = resp['data'][Object.keys(resp['data'])[0]];
          app.ports.receivedTestSubscriptionData.send(data);
        },
        error(err) {
          console.log(err);
        }
      });
  });
  */
})