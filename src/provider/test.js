import { config } from '../config';

export const test = {
  testCommand:
    'brightcove://fetchData?type=playlist&url=https://studio.brightcove.com/products/videocloud/media/playlists/5654175333001?client_id=fb1e962c-cdb2-4bb8-9c32-51dfb4d8067c&client_secret=BfuwAxmyCqpMc9ngkI8Qu4md2dcCl4IO1UGKlKiuHzebqg-dTDLat_43V6lHVQEY0YAZh-oLer60xsXOPAwgXQ&account_id=5653786027001',
  requestMocks: [
    {
      host: 'oauth.brightcove.com',
      method: 'post',
      path: '',
      httpCode: 200,
      expectedResponse: {
        expires_in: 1000,
        access_token: 'testToken'
      }
    },
    {
      host: 'cms.api.brightcove.com',
      method: 'get',
      path: '/v1/accounts/5653786027001/playlists/5654175333001/videos',
      httpCode: 200,
      expectedResponse: [
        {
          id: '5655134008001',
          account_id: '5653786027001',
          ad_keys: null,
          clip_source_video_id: null,
          complete: true,
          created_at: '2017-11-22T18:32:06.721Z',
          cue_points: [],
          custom_fields: {},
          delivery_type: 'dynamic_origin',
          description: null,
          digital_master_id: null,
          duration: 9816,
          economics: 'AD_SUPPORTED',
          folder_id: null,
          geo: null,
          has_digital_master: true,
          images: {
            poster: {
              src:
                'https://cf-images.us-east-1.prod.boltdns.net/v1/jit/5653786027001/d2d27bda-4e6c-4350-876b-098b566cb4be/main/1280x720/4s908ms/match/image.jpg',
              sources: [
                {
                  src:
                    'https://cf-images.us-east-1.prod.boltdns.net/v1/jit/5653786027001/d2d27bda-4e6c-4350-876b-098b566cb4be/main/1280x720/4s908ms/match/image.jpg',
                  height: 720,
                  width: 1280
                }
              ]
            },
            thumbnail: {
              src:
                'https://cf-images.us-east-1.prod.boltdns.net/v1/jit/5653786027001/d2d27bda-4e6c-4350-876b-098b566cb4be/main/160x90/4s908ms/match/image.jpg',
              sources: [
                {
                  src:
                    'https://cf-images.us-east-1.prod.boltdns.net/v1/jit/5653786027001/d2d27bda-4e6c-4350-876b-098b566cb4be/main/160x90/4s908ms/match/image.jpg',
                  height: 90,
                  width: 160
                }
              ]
            }
          },
          link: { url: 'http://www.nba.com' },
          long_description: null,
          name: 'chipotle',
          original_filename: 'chipotle.mov',
          projection: null,
          published_at: '2017-11-22T18:32:06.721Z',
          reference_id: null,
          schedule: null,
          sharing: null,
          state: 'ACTIVE',
          tags: [],
          text_tracks: [],
          updated_at: '2017-11-25T14:47:21.007Z'
        }
      ]
    },
    {
      host: 'cms.api.brightcove.com',
      method: 'get',
      path: '/v1/accounts/5653786027001/videos/5655134008001/sources',
      httpCode: 200,
      expectedResponse: [
        {
          src:
            'http://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/5653786027001/ff205b6f-7dd0-4d22-a396-185474749939/10s/master.m3u8?fastly_token=NWE0ZDExMmNfNjY3ZDNmNjBiMzY2MmYxYmU0OTFmNDk2MWU4YzA5NzhkYzQxMWZmN2NkYzMyNzZhMjBhM2FlZDI5MjA1N2ExZg%3D%3D',
          ext_x_version: '4',
          type: 'application/x-mpegURL',
          uploaded_at: '2017-11-22T18:31:33.093Z'
        },
        {
          src:
            'https://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/5653786027001/ff205b6f-7dd0-4d22-a396-185474749939/10s/master.m3u8?fastly_token=NWE0ZDExMmNfNjY3ZDNmNjBiMzY2MmYxYmU0OTFmNDk2MWU4YzA5NzhkYzQxMWZmN2NkYzMyNzZhMjBhM2FlZDI5MjA1N2ExZg%3D%3D',
          ext_x_version: '4',
          type: 'application/x-mpegURL',
          uploaded_at: '2017-11-22T18:31:33.093Z'
        },
        {
          src:
            'http://manifest.prod.boltdns.net/manifest/v1/hls/v5/clear/5653786027001/ff205b6f-7dd0-4d22-a396-185474749939/10s/master.m3u8?fastly_token=NWE0ZDExMmNfMWM0YmEwOGNmNzdlYmI2ODA4NjRkNDRiM2RjOWY2YzI5MzlkOGJmZmZkMzBmNDRjMjJlOTAxYWQ5NTY2ZjMyYQ%3D%3D',
          ext_x_version: '5',
          type: 'application/x-mpegURL',
          uploaded_at: '2017-11-22T18:31:33.093Z'
        },
        {
          src:
            'https://manifest.prod.boltdns.net/manifest/v1/hls/v5/clear/5653786027001/ff205b6f-7dd0-4d22-a396-185474749939/10s/master.m3u8?fastly_token=NWE0ZDExMmNfMWM0YmEwOGNmNzdlYmI2ODA4NjRkNDRiM2RjOWY2YzI5MzlkOGJmZmZkMzBmNDRjMjJlOTAxYWQ5NTY2ZjMyYQ%3D%3D',
          ext_x_version: '5',
          type: 'application/x-mpegURL',
          uploaded_at: '2017-11-22T18:31:33.093Z'
        },
        {
          src:
            'http://manifest.prod.boltdns.net/manifest/v1/dash/live-baseurl/clear/5653786027001/ff205b6f-7dd0-4d22-a396-185474749939/2s/manifest.mpd?fastly_token=NWE0ZDExMmNfNTE1MjFkZjk2MjA2ODBiZjYzZTZlMGU3MDU1Zjg5NmRlNDgzZDM3MmFmMTNhM2JlYmZkMGEzNTZjMTZjNzFlMQ%3D%3D',
          type: 'application/dash+xml',
          uploaded_at: '2017-11-22T18:31:33.093Z',
          profiles: 'urn:mpeg:dash:profile:isoff-live:2011'
        },
        {
          src:
            'https://manifest.prod.boltdns.net/manifest/v1/dash/live-baseurl/clear/5653786027001/ff205b6f-7dd0-4d22-a396-185474749939/2s/manifest.mpd?fastly_token=NWE0ZDExMmNfNTE1MjFkZjk2MjA2ODBiZjYzZTZlMGU3MDU1Zjg5NmRlNDgzZDM3MmFmMTNhM2JlYmZkMGEzNTZjMTZjNzFlMQ%3D%3D',
          type: 'application/dash+xml',
          uploaded_at: '2017-11-22T18:31:33.093Z',
          profiles: 'urn:mpeg:dash:profile:isoff-live:2011'
        },
        {
          remote: false,
          src:
            'http://bcbolt446c5271-a.akamaihd.net/media/v1/pmp4/static/clear/5653786027001/ff205b6f-7dd0-4d22-a396-185474749939/high.mp4?akamai_token=exp=1515000108~acl=/media/v1/pmp4/static/clear/5653786027001/ff205b6f-7dd0-4d22-a396-185474749939/high.mp4*~hmac=4f1eef6be65b3a33a98f73875bdaee262a4f7e56be7be36b89dfaa0e70ac970d',
          codec: 'H264',
          container: 'MP4',
          encoding_rate: 2100000,
          duration: 14058,
          height: 640,
          width: 360,
          size: 3686557,
          uploaded_at: '2017-11-22T18:31:33.093Z'
        },
        {
          remote: false,
          src:
            'https://bcbolt446c5271-a.akamaihd.net/media/v1/pmp4/static/clear/5653786027001/ff205b6f-7dd0-4d22-a396-185474749939/high.mp4?akamai_token=exp=1515000108~acl=/media/v1/pmp4/static/clear/5653786027001/ff205b6f-7dd0-4d22-a396-185474749939/high.mp4*~hmac=4f1eef6be65b3a33a98f73875bdaee262a4f7e56be7be36b89dfaa0e70ac970d',
          codec: 'H264',
          container: 'MP4',
          encoding_rate: 2100000,
          duration: 14058,
          height: 640,
          width: 360,
          size: 3686557,
          uploaded_at: '2017-11-22T18:31:33.093Z'
        },
        {
          remote: false,
          src:
            'http://bcbolt446c5271-a.akamaihd.net/media/v1/pmp4/static/clear/5653786027001/ff205b6f-7dd0-4d22-a396-185474749939/mid.mp4?akamai_token=exp=1515000108~acl=/media/v1/pmp4/static/clear/5653786027001/ff205b6f-7dd0-4d22-a396-185474749939/mid.mp4*~hmac=dbf7131c922d78ef5cda3b901f80977a528c5742ca182c03e11baff2439d0ac2',
          codec: 'H264',
          container: 'MP4',
          encoding_rate: 575000,
          duration: 14058,
          height: 270,
          width: 152,
          size: 1015261,
          uploaded_at: '2017-11-22T18:31:33.093Z'
        },
        {
          remote: false,
          src:
            'https://bcbolt446c5271-a.akamaihd.net/media/v1/pmp4/static/clear/5653786027001/ff205b6f-7dd0-4d22-a396-185474749939/mid.mp4?akamai_token=exp=1515000108~acl=/media/v1/pmp4/static/clear/5653786027001/ff205b6f-7dd0-4d22-a396-185474749939/mid.mp4*~hmac=dbf7131c922d78ef5cda3b901f80977a528c5742ca182c03e11baff2439d0ac2',
          codec: 'H264',
          container: 'MP4',
          encoding_rate: 575000,
          duration: 14058,
          height: 270,
          width: 152,
          size: 1015261,
          uploaded_at: '2017-11-22T18:31:33.093Z'
        }
      ][
        ({
          src:
            'http://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/5653786027001/d2d27bda-4e6c-4350-876b-098b566cb4be/10s/master.m3u8?fastly_token=NWE0ZDExMjhfNDU0ODMxNjQyMjE0Njc0MTg3NWFjYjQyYTU1NThkMmZmMTlkZjk5YTBiNzU4YjVmYjRjNzlkYzEwNWMwOTBlMw%3D%3D',
          ext_x_version: '4',
          type: 'application/x-mpegURL',
          uploaded_at: '2017-11-22T18:32:25.924Z'
        },
        {
          src:
            'https://manifest.prod.boltdns.net/manifest/v1/hls/v4/clear/5653786027001/d2d27bda-4e6c-4350-876b-098b566cb4be/10s/master.m3u8?fastly_token=NWE0ZDExMjhfNDU0ODMxNjQyMjE0Njc0MTg3NWFjYjQyYTU1NThkMmZmMTlkZjk5YTBiNzU4YjVmYjRjNzlkYzEwNWMwOTBlMw%3D%3D',
          ext_x_version: '4',
          type: 'application/x-mpegURL',
          uploaded_at: '2017-11-22T18:32:25.924Z'
        },
        {
          src:
            'http://manifest.prod.boltdns.net/manifest/v1/hls/v5/clear/5653786027001/d2d27bda-4e6c-4350-876b-098b566cb4be/10s/master.m3u8?fastly_token=NWE0ZDExMjhfY2IxNWUyMDhkYTQ1MjI2OTViZDJjMDJhYThhMmQyZDUzMmRjZTc2ZWYwMDUxZDljMWY5ZGY1N2NhZWZhNDlhMA%3D%3D',
          ext_x_version: '5',
          type: 'application/x-mpegURL',
          uploaded_at: '2017-11-22T18:32:25.924Z'
        },
        {
          src:
            'https://manifest.prod.boltdns.net/manifest/v1/hls/v5/clear/5653786027001/d2d27bda-4e6c-4350-876b-098b566cb4be/10s/master.m3u8?fastly_token=NWE0ZDExMjhfY2IxNWUyMDhkYTQ1MjI2OTViZDJjMDJhYThhMmQyZDUzMmRjZTc2ZWYwMDUxZDljMWY5ZGY1N2NhZWZhNDlhMA%3D%3D',
          ext_x_version: '5',
          type: 'application/x-mpegURL',
          uploaded_at: '2017-11-22T18:32:25.924Z'
        },
        {
          src:
            'http://manifest.prod.boltdns.net/manifest/v1/dash/live-baseurl/clear/5653786027001/d2d27bda-4e6c-4350-876b-098b566cb4be/2s/manifest.mpd?fastly_token=NWE0ZDExMjhfMWM3MzMwNjhiYzJjYjQ4NTQyM2QzZTI2ODEzZDI0YWE3ZTBkNjc1NTI1YjE4YWI4OWI4NGM4ODFiZGQ0NmE0MA%3D%3D',
          type: 'application/dash+xml',
          uploaded_at: '2017-11-22T18:32:25.924Z',
          profiles: 'urn:mpeg:dash:profile:isoff-live:2011'
        },
        {
          src:
            'https://manifest.prod.boltdns.net/manifest/v1/dash/live-baseurl/clear/5653786027001/d2d27bda-4e6c-4350-876b-098b566cb4be/2s/manifest.mpd?fastly_token=NWE0ZDExMjhfMWM3MzMwNjhiYzJjYjQ4NTQyM2QzZTI2ODEzZDI0YWE3ZTBkNjc1NTI1YjE4YWI4OWI4NGM4ODFiZGQ0NmE0MA%3D%3D',
          type: 'application/dash+xml',
          uploaded_at: '2017-11-22T18:32:25.924Z',
          profiles: 'urn:mpeg:dash:profile:isoff-live:2011'
        },
        {
          remote: false,
          src:
            'http://bcbolt446c5271-a.akamaihd.net/media/v1/pmp4/static/clear/5653786027001/d2d27bda-4e6c-4350-876b-098b566cb4be/high.mp4?akamai_token=exp=1515000104~acl=/media/v1/pmp4/static/clear/5653786027001/d2d27bda-4e6c-4350-876b-098b566cb4be/high.mp4*~hmac=f2eb5535939a6792b4b3321735541656f5f9d894b1e4cff4d1a6fc00baf53ccb',
          codec: 'H264',
          container: 'MP4',
          encoding_rate: 1998000,
          duration: 9898,
          height: 480,
          width: 268,
          size: 2464625,
          uploaded_at: '2017-11-22T18:32:25.924Z'
        },
        {
          remote: false,
          src:
            'https://bcbolt446c5271-a.akamaihd.net/media/v1/pmp4/static/clear/5653786027001/d2d27bda-4e6c-4350-876b-098b566cb4be/high.mp4?akamai_token=exp=1515000104~acl=/media/v1/pmp4/static/clear/5653786027001/d2d27bda-4e6c-4350-876b-098b566cb4be/high.mp4*~hmac=f2eb5535939a6792b4b3321735541656f5f9d894b1e4cff4d1a6fc00baf53ccb',
          codec: 'H264',
          container: 'MP4',
          encoding_rate: 1998000,
          duration: 9898,
          height: 480,
          width: 268,
          size: 2464625,
          uploaded_at: '2017-11-22T18:32:25.924Z'
        },
        {
          remote: false,
          src:
            'http://bcbolt446c5271-a.akamaihd.net/media/v1/pmp4/static/clear/5653786027001/d2d27bda-4e6c-4350-876b-098b566cb4be/mid.mp4?akamai_token=exp=1515000104~acl=/media/v1/pmp4/static/clear/5653786027001/d2d27bda-4e6c-4350-876b-098b566cb4be/mid.mp4*~hmac=4909c6020cdbf616a2d2bdd0a6d3fdaeff72dcb8eb8680ec74342a9f15ea6097',
          codec: 'H264',
          container: 'MP4',
          encoding_rate: 608000,
          duration: 9898,
          height: 270,
          width: 150,
          size: 754177,
          uploaded_at: '2017-11-22T18:32:25.924Z'
        },
        {
          remote: false,
          src:
            'https://bcbolt446c5271-a.akamaihd.net/media/v1/pmp4/static/clear/5653786027001/d2d27bda-4e6c-4350-876b-098b566cb4be/mid.mp4?akamai_token=exp=1515000104~acl=/media/v1/pmp4/static/clear/5653786027001/d2d27bda-4e6c-4350-876b-098b566cb4be/mid.mp4*~hmac=4909c6020cdbf616a2d2bdd0a6d3fdaeff72dcb8eb8680ec74342a9f15ea6097',
          codec: 'H264',
          container: 'MP4',
          encoding_rate: 608000,
          duration: 9898,
          height: 270,
          width: 150,
          size: 754177,
          uploaded_at: '2017-11-22T18:32:25.924Z'
        })
      ]
    }
  ]
};
