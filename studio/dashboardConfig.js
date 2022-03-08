export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6227730cd969c4f1d5628303',
                  title: 'Sanity Studio',
                  name: 'reading-studio',
                  apiId: '0a521650-7fbb-441b-9a66-1ea19b46c23b'
                },
                {
                  buildHookId: '6227730c08960df539e34b1a',
                  title: 'Blog Website',
                  name: 'reading-web',
                  apiId: '8a7f4504-1386-459c-af54-8fe8660088af'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/theunreal13/reading',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://reading-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
