export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f7951dad04d18855f950b10',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-6woxkf2c',
                  apiId: '6e806bf9-8b93-4aff-a492-04747984258f'
                },
                {
                  buildHookId: '5f7951dad04d1881ee9511e8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-gtw8ahvw',
                  apiId: '314636b8-f204-48c3-8826-6e878ac96599'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ThomasGuy/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-gtw8ahvw.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
