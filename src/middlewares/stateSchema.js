export default {
  $id: 'http://example.com/example.json',
  type: 'array',
  definitions: {},
  $schema: 'http://json-schema.org/draft-07/schema#',
  items: {
    $id: 'http://example.com/example.json/items',
    type: 'object',
    properties: {
      id: {
        $id: 'http://example.com/example.json/items/properties/id',
        type: 'integer',
        title: 'The Id Schema ',
        default: 0,
        examples: [15],
      },
      title: {
        $id: 'http://example.com/example.json/items/properties/title',
        type: 'object',
        properties: {
          rendered: {
            $id:
              'http://example.com/example.json/items/properties/title/properties/rendered',
            type: 'string',
            title: 'The Rendered Schema ',
            default: '',
            examples: ['Junior to Senior Developer Roadmap'],
          },
        },
      },
      content: {
        $id: 'http://example.com/example.json/items/properties/content',
        type: 'object',
        properties: {
          rendered: {
            $id:
              'http://example.com/example.json/items/properties/content/properties/rendered',
            type: 'string',
            title: 'The Rendered Schema ',
            default: '',
            examples: [
              '<p><img class="size-medium wp-image-16 aligncenter" src="http://hannasoderstrom.com/admin/wp-content/uploads/2018/07/senior-developer-225x300.jpg" alt="" width="225" height="300" srcset="http://hannasoderstrom.com/admin/wp-content/uploads/2018/07/senior-developer-225x300.jpg 225w, http://hannasoderstrom.com/admin/wp-content/uploads/2018/07/senior-developer.jpg 750w" sizes="(max-width: 225px) 100vw, 225px" /></p>\n<p><a href="https://hackernoon.com/dont-be-a-junior-developer-608c255b3056">There&#8217;s this article on Hackernoon</a> that gained a lot of traction for setting up a roadmap for how to climb the ladder of skills to become more of a senior developer (and why you should never refer to yourself as a junior developer). Although there&#8217;s no industri standard of what a &#8220;senior developer&#8221; is or when you achieve that level of experience to call yourself a senior developer, there are of course a lot of stuff you most likely will be expected to handle if you&#8217;re calling yourself a senior developer.</p>\n<p>So, I took the course and now I&#8217;m almost done with it and I can conclude that I already knew most of the stuff in it and it is quite an extensive list of knowledge. React, Redux, Server-side Rendered Apps, SSH, optimisation, testing, TypeScript, security, code analysis, Docker, Redis, Amazon Web Services, Sessions with JSON Web Token, Continuous Integration/Delivery. I&#8217;m quite proud to say that so far I&#8217;m quite familiar with most of what the course topics.</p>\n<p>It still feels good to confirm and fill in some pieces of the puzzle when it comes to theoretical parts that you don&#8217;t necessarily learn when you learn by doing in real projects, usually guided by someone with more experience.</p>\n<p>So, am I an senior developer know? I don&#8217;t know. But I&#8217;m at least one step closer to it! And I feel a lot more confident with these topics as I have solved a lot of tasks through-out the course!</p>\n<p><a href="https://www.udemy.com/the-complete-junior-to-senior-web-developer-roadmap/">You can find the course here</a> (and if its not on sale right now, you can google for coupon codes to get it a LOT cheaper than the original price!)</p>\n',
            ],
          },
          protected: {
            $id:
              'http://example.com/example.json/items/properties/content/properties/protected',
            type: 'boolean',
            title: 'The Protected Schema ',
            default: false,
            examples: [false],
          },
        },
      },
      date: {
        $id: 'http://example.com/example.json/items/properties/date',
        type: 'string',
        title: 'The Date Schema ',
        default: '',
        examples: ['2018-07-14T11:16:25'],
      },
      excerpt: {
        $id: 'http://example.com/example.json/items/properties/excerpt',
        type: 'object',
        properties: {
          rendered: {
            $id:
              'http://example.com/example.json/items/properties/excerpt/properties/rendered',
            type: 'string',
            title: 'The Rendered Schema ',
            default: '',
            examples: [
              '<p>There&#8217;s this article on Hackernoon that gained a lot of traction for setting up a roadmap for how to climb the ladder of skills to become more of a senior developer (and why you should never refer to yourself as a junior developer). Although there&#8217;s no industri standard of what a &#8220;senior developer&#8221; is or &hellip; </p>\n<p class="link-more"><a href="http://hannasoderstrom.com/admin/2018/07/14/junior-to-senior-developer-roadmap/" class="more-link">Continue reading<span class="screen-reader-text"> &#8220;Junior to Senior Developer Roadmap&#8221;</span></a></p>\n',
            ],
          },
          protected: {
            $id:
              'http://example.com/example.json/items/properties/excerpt/properties/protected',
            type: 'boolean',
            title: 'The Protected Schema ',
            default: false,
            examples: [false],
          },
        },
      },
      media: {
        $id: 'http://example.com/example.json/items/properties/media',
        type: 'object',
        properties: {
          guid: {
            $id:
              'http://example.com/example.json/items/properties/media/properties/guid',
            type: 'object',
            properties: {
              rendered: {
                $id:
                  'http://example.com/example.json/items/properties/media/properties/guid/properties/rendered',
                type: 'string',
                title: 'The Rendered Schema ',
                default: '',
                examples: [
                  'http://hannasoderstrom.com/admin/wp-content/uploads/2018/07/senior-developer.jpg',
                ],
              },
            },
          },
        },
      },
    },
  },
}
