/*
export const USER_PAGES_MENU = [
{
  path: '',
  children: [
    {
      path: 'userDashboard',
      data: {
        menu: {
          title: 'Dashboard',
          icon: 'ion-android-home',
          selected: false,
          expanded: false,
          order: 0
        }
      }
    },
    {
      path: 'profiledetails',
      data: {
        menu: {
          title: 'Profile',
          icon: 'ion-person',
          selected: false,
          expanded: false,
          order: 0
        }
      }
    }]
}];

*/

export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'usersManagement',
        data: {
          menu: {
            title: 'User Management',
            icon: 'ion-person-stalker',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'advertisement',
        data: {
          menu: {
            title: 'FIND URI',
            icon: 'ion-ios-cart',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'issuedocs',
        data: {
          menu: {
            title: 'Issued Documents',
            icon: 'fa fa-file',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'uploaddocs',
        data: {
          menu: {
            title: 'Upload Documents',
            icon: 'ion-ios-cloud-upload',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'activity',
        data: {
          menu: {
            title: 'Activity',
            icon: 'ion-ionic',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'issuers',
        data: {
          menu: {
            title: 'Issuers',
            icon: 'ion-android-contacts',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'requesters',
        data: {
          menu: {
            title: 'Requesters',
            icon: 'ion-android-person-add',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'shareddocs',
        data: {
          menu: {
            title: 'Shared Docs',
            icon: 'fa fa-share-alt',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },

      /*{
        path: ['/userDashboard'],
        data: {
          menu: {
            title: 'User Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },*/

      /*{
        path: '',
        data: {
          menu: {
            title: 'BlueMix Services',
            icon: 'ion-android-playstore',
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [
          {
            path: 'conversation',
            data: {
              menu: {
                title: 'Conversation',
                icon: 'ion-chatboxes'
              }
            }
          },
          {
            path: 'translation',
            data: {
              menu: {
                title: 'Language Translation',
                icon: 'ion-arrow-swap'
              }
            }
          },
          {
            path: 'visualRecognition',
            data: {
              menu: {
                title: 'Visual Recognition',
                icon: 'ion-image'
              }
            }
          },
          {
            path: 'fileConverter',
            data: {
              menu: {
                title: 'File Converter',
                icon: 'ion-ios-paper'
              }
            }
          }
        ]
      },*/

     /* {
        path: '',
        data: {
          menu: {
            title: 'UI controls',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        },
        children: [
          {
            path: 'editors',
            data: {
              menu: {
                title: 'general.menu.editors',
                icon: 'ion-edit',
                selected: false,
                expanded: false,
                order: 100,
              }
            },
            children: [
              {
                path: 'ckeditor',
                data: {
                  menu: {
                    title: 'general.menu.ck_editor',
                  }
                }
              }
            ]
          },
          {
            path: 'components',
            data: {
              menu: {
                title: 'general.menu.components',
                icon: 'ion-gear-a',
                selected: false,
                expanded: false,
                order: 250,
              }
            },
            children: [
              {
                path: 'treeview',
                data: {
                  menu: {
                    title: 'general.menu.tree_view',
                  }
                }
              }
            ]
          },
          {
            path: 'charts',
            data: {
              menu: {
                title: 'general.menu.charts',
                icon: 'ion-stats-bars',
                selected: false,
                expanded: false,
                order: 200,
              }
            },
            children: [
              {
                path: 'chartist-js',
                data: {
                  menu: {
                    title: 'general.menu.chartist_js',
                  }
                }
              }
            ]
          },
          {
            path: 'ui',
            data: {
              menu: {
                title: 'general.menu.ui_features',
                icon: 'ion-android-laptop',
                selected: false,
                expanded: false,
                order: 300,
              }
            },
            children: [
              {
                path: 'typography',
                data: {
                  menu: {
                    title: 'general.menu.typography',
                  }
                }
              },
              {
                path: 'buttons',
                data: {
                  menu: {
                    title: 'general.menu.buttons',
                  }
                }
              },
              {
                path: 'icons',
                data: {
                  menu: {
                    title: 'general.menu.icons',
                  }
                }
              },
              {
                path: 'modals',
                data: {
                  menu: {
                    title: 'general.menu.modals',
                  }
                }
              },
              {
                path: 'slim',
                data: {
                  menu: {
                    title: 'Slim loading bar',
                  }
                }
              },
              {
                path: 'grid',
                data: {
                  menu: {
                    title: 'general.menu.grid',
                  }
                }
              },
            ]
          },
          {
            path: 'forms',
            data: {
              menu: {
                title: 'general.menu.form_elements',
                icon: 'ion-compose',
                selected: false,
                expanded: false,
                order: 400,
              }
            },
            children: [
              {
                path: 'inputs',
                data: {
                  menu: {
                    title: 'general.menu.form_inputs',
                  }
                }
              },
              {
                path: 'layouts',
                data: {
                  menu: {
                    title: 'general.menu.form_layouts',
                  }
                }
              }
            ]
          },
          {
            path: 'tables',
            data: {
              menu: {
                title: 'general.menu.tables',
                icon: 'ion-grid',
                selected: false,
                expanded: false,
                order: 500,
              }
            },
            children: [
              {
                path: 'basictables',
                data: {
                  menu: {
                    title: 'general.menu.basic_tables',
                  }
                }
              },
              {
                path: 'smarttables',
                data: {
                  menu: {
                    title: 'general.menu.smart_tables',
                  }
                }
              },
              {
                path: 'datatables',
                data: {
                  menu: {
                    title: 'Data Tables',
                  }
                }
              },
              {
                path: 'hottables',
                data: {
                  menu: {
                    title: 'Hot Tables',
                  }
                }
              }
            ]
          },
          {
            path: 'maps',
            data: {
              menu: {
                title: 'general.menu.maps',
                icon: 'ion-ios-location-outline',
                selected: false,
                expanded: false,
                order: 600,
              }
            },
            children: [
              {
                path: 'googlemaps',
                data: {
                  menu: {
                    title: 'general.menu.google_maps',
                  }
                }
              },
              {
                path: 'leafletmaps',
                data: {
                  menu: {
                    title: 'general.menu.leaflet_maps',
                  }
                }
              },
              {
                path: 'bubblemaps',
                data: {
                  menu: {
                    title: 'general.menu.bubble_maps',
                  }
                }
              },
              {
                path: 'linemaps',
                data: {
                  menu: {
                    title: 'general.menu.line_maps',
                  }
                }
              }
            ]
          },
          {
            path: '',
            data: {
              menu: {
                title: 'general.menu.pages',
                icon: 'ion-document',
                selected: false,
                expanded: false,
                order: 650,
              }
            },
            children: [
              {
                path: ['/login'],
                data: {
                  menu: {
                    title: 'general.menu.login'
                  }
                }
              },
              {
                path: ['/register'],
                data: {
                  menu: {
                    title: 'general.menu.register'
                  }
                }
              }
            ]
          },
          {
            path: '',
            data: {
              menu: {
                title: 'general.menu.menu_level_1',
                icon: 'ion-ios-more',
                selected: false,
                expanded: false,
                order: 700,
              }
            },
            children: [
              {
                path: '',
                data: {
                  menu: {
                    title: 'general.menu.menu_level_1_1',
                    url: '#'
                  }
                }
              },
              {
                path: '',
                data: {
                  menu: {
                    title: 'general.menu.menu_level_1_2',
                    url: '#'
                  }
                },
                children: [
                  {
                    path: '',
                    data: {
                      menu: {
                        title: 'general.menu.menu_level_1_2_1',
                        url: '#'
                      }
                    }
                  }
                ]
              }
            ]
          },

        ]
      },*/
      /*{
        path: '',
        data: {
          menu: {
            title: 'Wavelabs',
            url: 'http://wavelabs.in',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
          }
        }
      }*/
    ]
  }
];
