const options = [
  {
    key: "selfService",
    label: "PageAdmin.menu.selfService",
    leftIcon: "ion-settings",
    children:[
      {
        key: "PageAdmin.menu.selfDashboard",
        label: "PageAdmin.menu.selfDashboard",
        leftIcon: "ion-ios-home"
      },
      {
        key: "PageAdmin.menu.profile",
        label: "PageAdmin.menu.profile",
        leftIcon: "ion-compass"
      },
      {
        key: "PageAdmin.menu.credentials",
        label: "PageAdmin.menu.credentials",
        leftIcon: "ion-locked"
      },
      {
        key: "PageAdmin.menu.request",
        label: "PageAdmin.menu.request",
        leftIcon: "ion-compose"
      }
    ]
  },
  {
    key: "mainNavigation",
    label: "PageAdmin.menu.mainNavigation",
    leftIcon: "ion-ios-gear",
    children: [
      {
        key: "PageAdmin.menu.dashboard",
        label: "PageAdmin.menu.dashboard",
        leftIcon: "ion-ios-speedometer"
      },
      {
        key: "PageAdmin.menu.top.users",
        label: "PageAdmin.menu.top.users",
        leftIcon: "ion-ios-person",
        children:[
          {
            key: "PageAdmin.menu.top.users.list",
            label: "PageAdmin.menu.top.users.list",
            leftIcon: "ion-document"
          },
          {
            key: "PageAdmin.menu.top.users.new",
            label: "PageAdmin.menu.top.users.new",
            leftIcon: "ion-document"
          }
        ]
      },
      {
        key: "PageAdmin.menu.top.users.org",
        label: "PageAdmin.menu.top.users.org",
        leftIcon: "ion-ios-people",
        children:[
          {
            key: "PageAdmin.menu.top.users.org.new",
            label: "PageAdmin.menu.top.users.org.new",
            leftIcon: "ion-document"
          },
          {
            key: "PageAdmin.menu.top.users.org.tree",
            label: "PageAdmin.menu.top.users.org.tree",
            leftIcon: "ion-document"
          }
        ]
      },
      {
        key: "PageAdmin.menu.top.roles",
        label: "PageAdmin.menu.top.roles",
        leftIcon: "ion-person-add",
        children:[
          {
            key: "PageAdmin.menu.top.roles.list",
            label: "PageAdmin.menu.top.roles.list",
            leftIcon: "ion-document"
          },
          {
            key: "PageAdmin.menu.top.roles.new",
            label: "PageAdmin.menu.top.roles.new",
            leftIcon: "ion-document"
          }
        ]
      },
      {
        key: "PageAdmin.menu.top.services",
        label: "PageAdmin.menu.top.services",
        leftIcon: "ion-ios-infinite",
        children:[
          {
            key: "PageAdmin.menu.top.services.list",
            label: "PageAdmin.menu.top.services.list",
            leftIcon: "ion-document"
          },
          {
            key: "PageAdmin.menu.top.services.new",
            label: "PageAdmin.menu.top.services.new",
            leftIcon: "ion-document"
          }
        ]
      },
      {
        key: "PageAdmin.menu.top.resources",
        label: "PageAdmin.menu.top.resources",
        leftIcon: "ion-soup-can",
        children:[
          {
            key: "PageAdmin.menu.top.resources.import",
            label: "PageAdmin.menu.top.resources.import",
            leftIcon: "ion-document"
          },
          {
            key: "PageAdmin.menu.top.resources.list",
            label: "PageAdmin.menu.top.resources.list",
            leftIcon: "ion-document"
          },
          {
            key: "PageAdmin.menu.top.resources.new",
            label: "PageAdmin.menu.top.resources.new",
            leftIcon: "ion-document"
          }
        ]
      },
      {
        key: "PageAdmin.menu.top.workItems",
        label: "PageAdmin.menu.top.workItems",
        leftIcon: "ion-android-checkbox-outline",
        children:[
          {
            key: "PageAdmin.menu.top.workItems.list",
            label: "PageAdmin.menu.top.workItems.list",
            leftIcon: "ion-document"
          },
          {
            key: "PageAdmin.menu.top.workItems.listAll",
            label: "PageAdmin.menu.top.workItems.listAll",
            leftIcon: "ion-document"
          },
          {
            key: "PageAdmin.menu.top.workItems.listAttorney",
            label: "PageAdmin.menu.top.workItems.listAttorney",
            leftIcon: "ion-document"
          },
          {
            key: "PageAdmin.menu.top.workItems.listClaimable",
            label: "PageAdmin.menu.top.workItems.listClaimable",
            leftIcon: "ion-document"
          },
          {
            key: "PageAdmin.menu.top.workItems.listProcessInstancesAll",
            label: "PageAdmin.menu.top.workItems.listProcessInstancesAll",
            leftIcon: "ion-document"
          },
          {
            key: "PageAdmin.menu.top.workItems.listProcessInstancesRequestedBy",
            label: "PageAdmin.menu.top.workItems.listProcessInstancesRequestedBy",
            leftIcon: "ion-document"
          },
          {
            key: "PageAdmin.menu.top.workItems.listProcessInstancesRequestedFor",
            label: "PageAdmin.menu.top.workItems.listProcessInstancesRequestedFor",
            leftIcon: "ion-document"
          }
        ]
      },
      {
        key: "PageAdmin.menu.top.certification",
        label: "PageAdmin.menu.top.certification",
        leftIcon: "ion-ribbon-b",
        children:[
          {
            key: "PageAdmin.menu.top.certification.campaigns",
            label: "PageAdmin.menu.top.certification.campaigns",
            leftIcon: "ion-document"
          },
          {
            key: "PageAdmin.menu.top.certification.decisions",
            label: "PageAdmin.menu.top.certification.decisions",
            leftIcon: "ion-document"
          },
          {
            key: "PageAdmin.menu.top.certification.definitions",
            label: "PageAdmin.menu.top.certification.definitions",
            leftIcon: "ion-document"
          },
          {
            key: "PageAdmin.menu.top.certification.newDefinition",
            label: "PageAdmin.menu.top.certification.newDefinition",
            leftIcon: "ion-document"
          },
          {
            key: "PageAdmin.menu.top.certification.scheduling",
            label: "PageAdmin.menu.top.certification.scheduling",
            leftIcon: "ion-document"
          }
        ]
      },
      {
        key: "PageAdmin.menu.top.serverTasks",
        label: "PageAdmin.menu.top.serverTasks",
        leftIcon: "ion-ios-cloud",
        children:[
          {
            key: "PageAdmin.menu.top.serverTasks.list",
            label: "PageAdmin.menu.top.serverTasks.list",
            leftIcon: "ion-document"
          },
          {
            key: "PageAdmin.menu.top.serverTasks.new",
            label: "PageAdmin.menu.top.serverTasks.new",
            leftIcon: "ion-document"
          }
        ]
      },
      {
        key: "PageAdmin.menu.top.reports",
        label: "PageAdmin.menu.top.reports",
        leftIcon: "ion-ios-pie",
        children:[
          {
            key: "PageAdmin.menu.top.reports.created",
            label: "PageAdmin.menu.top.reports.created",
            leftIcon: "ion-document"
          },
          {
            key: "PageAdmin.menu.top.reports.list",
            label: "PageAdmin.menu.top.reports.list",
            leftIcon: "ion-document"
          },
          {
            key: "PageAdmin.menu.top.reports.new",
            label: "PageAdmin.menu.top.reports.new",
            leftIcon: "ion-document"
          }
        ]
      }
    ]
  },
  {
    key: "configuration",
    label: "PageAdmin.menu.top.configuration",
    leftIcon: "ion-android-options",
    children: [
      {
        key: "PageAdmin.menu.top.configuration.bulkActions",
        label: "PageAdmin.menu.top.configuration.bulkActions",
        leftIcon: "ion-social-buffer"
      },
      {
        key: "PageAdmin.menu.top.configuration.importObject",
        label: "PageAdmin.menu.top.configuration.importObject",
        leftIcon: "ion-log-in"
      },
      {
        key: "PageAdmin.menu.top.configuration.repositoryObjects",
        label: "PageAdmin.menu.top.configuration.repositoryObjects",
        leftIcon: "ion-cube",
        children: [
          {
            key: "PageAdmin.menu.top.configuration.repositoryObjectsList",
            label: "PageAdmin.menu.top.configuration.repositoryObjectsList",
            leftIcon: "ion-document"
          }
        ]
      },
      {
        key: "PageAdmin.menu.top.configuration.basic",
        label: "PageAdmin.menu.top.configuration.basic",
        leftIcon: "ion-laptop",
        children: [
          {
            key: "PageAdmin.menu.top.configuration.basic.new",
            label: "PageAdmin.menu.top.configuration.basic.new",
            leftIcon: "ion-document"
          },
          {
            key: "PageAdmin.menu.top.configuration.notifications",
            label: "PageAdmin.menu.top.configuration.notifications",
            leftIcon: "ion-document"
          },
          {
            key: "PageAdmin.menu.top.configuration.logging",
            label: "PageAdmin.menu.top.configuration.logging",
            leftIcon: "ion-document"
          },
          {
            key: "PageAdmin.menu.top.configuration.profiling",
            label: "PageAdmin.menu.top.configuration.profiling",
            leftIcon: "ion-document"
          },
          {
            key: "PageAdmin.menu.top.configuration.adminGui",
            label: "PageAdmin.menu.top.configuration.adminGui",
            leftIcon: "ion-document"
          }
        ]
      },
      {
        key: "PageAdmin.menu.top.configuration.internals",
        label: "PageAdmin.menu.top.configuration.internals",
        leftIcon: "ion-ios-color-wand"
      },
      {
        key: "PageAdmin.menu.top.configuration.repoQuery",
        label: "PageAdmin.menu.top.configuration.repoQuery",
        leftIcon: "ion-search"
      },
      {
        key: "PageAdmin.menu.top.configuration.about",
        label: "PageAdmin.menu.top.configuration.about",
        leftIcon: "ion-information-circled"
      }
    ]
  }
];
export default options;
