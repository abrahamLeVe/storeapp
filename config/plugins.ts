export default ({ env }) => ({
    upload: {
        config: {
            provider: "cloudinary",
            providerOptions: {
                cloud_name: env("CLOUDINARY_NAME"),
                api_key: env("CLOUDINARY_KEY"),
                api_secret: env("CLOUDINARY_SECRET"),
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },
        },
    },
    "users-permissions": {
        config: {
            jwt: {
                expiresIn: "2h",
            },
            register: {
                allowedFields: ["avatar"],
            },
        },
    },
    "models-relation-diagram": {
        enabled: true,
        config: {
          defaultExcludeAdmin: true, // hide admin:: + strapi:: + webhook + plugin::i18n.locale + plugin::content-releases
          defaultHideUpload: true, // hide plugin::upload.file + plugin::upload.folder
          defaultExcludeComponents: false, // hide components
          defaultLayout: 'dagre', // default layout: ELK,Dagre
          defaultEdgesType: 'step', // default edge type: straight,step,smoothstep,bezier
          hideMarkers: true, // hide relation marker on edges 
        }
      },
});
