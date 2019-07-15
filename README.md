# zapp-pipes-provider-brightcove

A data source provider for the brightcove CMS API. More on brightcove can be found [here](https://www.brightcove.com/en/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please keep in mind that in order to run this project you will need Applicaster `NPM TOKEN` in your env variables.

### Installing

1.  Clone this repo;
2.  Navigate to the project folder;
3.  Run `npm install`;

## Running the tests

We're using [AVA](https://github.com/avajs/ava) as our test runner.
Tests should be placed in the `test` folder which is following project folder structure.

## Deployment

Provider is an npm package which is part of our applicaster private npm account.

### Publishing to npm

1.  Change version number inside `package.json`;
2.  Build bundle: `npm run build`;
3.  Publish bundle to npm `npm publish`.

### Updating plugin

1.  Install zappifest if you don't have it yet according to the [installation instructions](https://github.com/applicaster/zappifest).
2.  Update npm package version number inside `plugin-manifest.json` and `package.json` files. `dependency_version: x.x.xx`
3.  Publish the provider to the npm repository according to the instructions above. 
3.  run `zappifest publish --manifest plugin-manifest.json --access-token $ZAPP_TOKEN`

### Bundling DSP for your app

Bundling the data source provider to your app is done through the feed section in the ui builder. For more information please refer to http://developer-zapp.applicaster.com/Zapp-Pipes/7.-Connect-to-Zapp.html

## Development

### Testing locally in the browser

1.  run `npm start`
2.  open your browser at `http://localhost:8080/brightcove/fetchData?type=[type]&param1=[param1]...&paramN=[paramN]`

## List of Handlers

### Getting your credentials

In order to use API you need to obtain `client_id`, `client_secret`, `account_id` using this [instructions](https://support.brightcove.com/oauth-get-client-credentials-using-curl).
Feed url should be configured as follows: `&client_id=<your client id>&client_secret=<client_secret>&account_id=<account ID>`

### Playlist handler

Retrieves a feed of all the videos in the requested playlist.

| Parameter | Description                                            | Type   | Example                |
| --------- | -------------------------------------------------------| ------ | ---------------------- |
| id        | required. Playlist id                                  | Number | `id=5654175333001`     |

Url example: `brightcove://fetchData?type=playlist&id=5654175333001&client_id=fb1e962c-cdb2-4bb8-9c32-51dfb4d8067c&client_secret=BfuwAxmyCqpMc9ngkI8Qu4md2dcCl4IO1UGKlKiuHzebqg-dTDLat_43V6lHVQEY0YAZh-oLer60xsXOPAwgXQ&account_id=5653786027001`

### Folder handler

Retrieves a feed of all the videos in the requested folder.

| Parameter | Description                                            | Type   | Example                |
| --------- | -------------------------------------------------------| ------ | ---------------------- |
| id        | required. Folder id                                    | Number | `id=5654175333001`     |

Url example: `brightcove://fetchData?type=folder&id=5654175333001&client_id=fb1e962c-cdb2-4bb8-9c32-51dfb4d8067c&client_secret=BfuwAxmyCqpMc9ngkI8Qu4md2dcCl4IO1UGKlKiuHzebqg-dTDLat_43V6lHVQEY0YAZh-oLer60xsXOPAwgXQ&account_id=5653786027001&id=5654175333001`

### Search handler

Retrieves a feed of all the videos in a search query.

| Parameter | Description                                            | Type   | Example                 |
| --------- | -------------------------------------------------------| ------ | ----------------------- |
| item_type | optional. Type of search item. Playlists or videos     | String | `item_type=playlists`   |
| query     | optional. Search query                                 | String | `query=comedy`          |
| limit     | optional. Result limit                                 | Number | `limit=10`              |
| sort_by   | optional. Sort by field                                | String | `sort_by=published_at`  |

Url example: `brightcove://fetchData?type=search&item_type=playlists&sort_by=published_at&client_id=fb1e962c-cdb2-4bb8-9c32-51dfb4d8067c&client_secret=BfuwAxmyCqpMc9ngkI8Qu4md2dcCl4IO1UGKlKiuHzebqg-dTDLat_43V6lHVQEY0YAZh-oLer60xsXOPAwgXQ&account_id=5653786027001`
