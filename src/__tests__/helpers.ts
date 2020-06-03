export const ContentType = {
  interfaces: [
    {
      __typename: '__Type',
      kind: 'INTERFACE',
      name: 'Node',
      ofType: null,
    },
  ],
  enumValues: null,
  kind: 'OBJECT',
  name: 'Article',
  inputFields: null,
  __typename: '__Type',
  description: null,
  possibleTypes: null,
  fields: [
    {
      name: 'nodeId',
      type: {
        __typename: '__Type',
        kind: 'NON_NULL',
        name: null,
        ofType: {
          __typename: '__Type',
          kind: 'SCALAR',
          name: 'ID',
          ofType: null,
        },
      },
      __typename: '__Field',
      isDeprecated: false,
      description:
        'A globally unique identifier. Can be used in various places throughout the system to identify this single value.',
      args: [],
      deprecationReason: null,
    },
    {
      name: 'name',
      type: {
        __typename: '__Type',
        kind: 'NON_NULL',
        name: null,
        ofType: {
          __typename: '__Type',
          kind: 'SCALAR',
          name: 'String',
          ofType: null,
        },
      },
      __typename: '__Field',
      isDeprecated: false,
      description: null,
      args: [],
      deprecationReason: null,
    },
    {
      name: 'blocks',
      type: {
        __typename: '__Type',
        kind: 'LIST',
        name: null,
        ofType: {
          __typename: '__Type',
          kind: 'SCALAR',
          name: 'ContentBlock',
          ofType: null,
        },
      },
      __typename: '__Field',
      isDeprecated: false,
      description: null,
      args: [],
      deprecationReason: null,
    },
    {
      name: 'block',
      type: {
        __typename: '__Type',
        kind: 'OBJECT',
        name: 'ContentBlock',
        ofType: null,
      },
      __typename: '__Field',
      isDeprecated: false,
      description: null,
      args: [],
      deprecationReason: null,
    },
    {
      name: 'pubTs',
      type: {
        __typename: '__Type',
        kind: 'SCALAR',
        name: 'Datetime',
        ofType: null,
      },
      __typename: '__Field',
      isDeprecated: false,
      description: null,
      args: [],
      deprecationReason: null,
    },
    {
      name: 'deleted',
      type: {
        __typename: '__Type',
        kind: 'NON_NULL',
        name: null,
        ofType: {
          __typename: '__Type',
          kind: 'SCALAR',
          name: 'Boolean',
          ofType: null,
        },
      },
      __typename: '__Field',
      isDeprecated: false,
      description: null,
      args: [],
      deprecationReason: null,
    },
    {
      name: 'id',
      type: {
        __typename: '__Type',
        kind: 'NON_NULL',
        name: null,
        ofType: {
          __typename: '__Type',
          kind: 'SCALAR',
          name: 'Int',
          ofType: null,
        },
      },
      __typename: '__Field',
      isDeprecated: false,
      description: null,
      args: [],
      deprecationReason: null,
    },
    {
      name: 'ts',
      type: {
        __typename: '__Type',
        kind: 'NON_NULL',
        name: null,
        ofType: {
          __typename: '__Type',
          kind: 'SCALAR',
          name: 'Datetime',
          ofType: null,
        },
      },
      __typename: '__Field',
      isDeprecated: false,
      description: null,
      args: [],
      deprecationReason: null,
    },
    {
      name: 'author',
      type: {
        __typename: '__Type',
        kind: 'NON_NULL',
        name: null,
        ofType: {
          __typename: '__Type',
          kind: 'SCALAR',
          name: 'String',
          ofType: null,
        },
      },
      __typename: '__Field',
      isDeprecated: false,
      description: null,
      args: [],
      deprecationReason: null,
    },
    {
      name: 'published',
      type: {
        __typename: '__Type',
        kind: 'OBJECT',
        name: 'ArticleRevision',
        ofType: null,
      },
      __typename: '__Field',
      isDeprecated: false,
      description:
        'Reads a single `ArticleRevision` that is related to this `Article`.',
      args: [],
      deprecationReason: null,
    },
    {
      name: 'revisions',
      type: {
        __typename: '__Type',
        kind: 'NON_NULL',
        name: null,
        ofType: {
          __typename: '__Type',
          kind: 'OBJECT',
          name: 'ArticleRevisionsConnection',
          ofType: null,
        },
      },
      __typename: '__Field',
      isDeprecated: false,
      description:
        'Reads and enables pagination through a set of `ArticleRevision`.',
      args: [
        {
          defaultValue: null,
          __typename: '__InputValue',
          description: 'Only read the first `n` values of the set.',
          name: 'first',
          type: {
            __typename: '__Type',
            kind: 'SCALAR',
            name: 'Int',
            ofType: null,
          },
        },
        {
          defaultValue: null,
          __typename: '__InputValue',
          description: 'Only read the last `n` values of the set.',
          name: 'last',
          type: {
            __typename: '__Type',
            kind: 'SCALAR',
            name: 'Int',
            ofType: null,
          },
        },
        {
          defaultValue: null,
          __typename: '__InputValue',
          description:
            'Skip the first `n` values from our `after` cursor, an alternative to cursor based pagination. May not be used with `last`.',
          name: 'offset',
          type: {
            __typename: '__Type',
            kind: 'SCALAR',
            name: 'Int',
            ofType: null,
          },
        },
        {
          defaultValue: null,
          __typename: '__InputValue',
          description: 'Read all values in the set before (above) this cursor.',
          name: 'before',
          type: {
            __typename: '__Type',
            kind: 'SCALAR',
            name: 'Cursor',
            ofType: null,
          },
        },
        {
          defaultValue: null,
          __typename: '__InputValue',
          description: 'Read all values in the set after (below) this cursor.',
          name: 'after',
          type: {
            __typename: '__Type',
            kind: 'SCALAR',
            name: 'Cursor',
            ofType: null,
          },
        },
        {
          defaultValue: '[PRIMARY_KEY_ASC]',
          __typename: '__InputValue',
          description: 'The method to use when ordering `ArticleRevision`.',
          name: 'orderBy',
          type: {
            __typename: '__Type',
            kind: 'LIST',
            name: null,
            ofType: {
              __typename: '__Type',
              kind: 'NON_NULL',
              name: null,
              ofType: {
                __typename: '__Type',
                kind: 'ENUM',
                name: 'ArticleRevisionsOrderBy',
                ofType: null,
              },
            },
          },
        },
        {
          defaultValue: null,
          __typename: '__InputValue',
          description:
            'A condition to be used in determining which values should be returned by the collection.',
          name: 'condition',
          type: {
            __typename: '__Type',
            kind: 'INPUT_OBJECT',
            name: 'ArticleRevisionCondition',
            ofType: null,
          },
        },
        {
          defaultValue: null,
          __typename: '__InputValue',
          description:
            'A filter to be used in determining which values should be returned by the collection.',
          name: 'filter',
          type: {
            __typename: '__Type',
            kind: 'INPUT_OBJECT',
            name: 'ArticleRevisionFilter',
            ofType: null,
          },
        },
      ],
      deprecationReason: null,
    },
  ],
}

export const ContentPatch = {
  interfaces: null,
  enumValues: null,
  kind: 'INPUT_OBJECT',
  name: 'ContentPatch',
  inputFields: [
    {
      defaultValue: null,
      __typename: '__InputValue',
      description: null,
      name: 'name',
      type: {
        __typename: '__Type',
        kind: 'SCALAR',
        name: 'String',
        ofType: null,
      },
    },
    {
      defaultValue: null,
      __typename: '__InputValue',
      description: null,
      name: 'blocks',
      type: {
        __typename: '__Type',
        kind: 'LIST',
        name: null,
        ofType: {
          __typename: '__Type',
          kind: 'SCALAR',
          name: 'ContentBlock',
          ofType: null,
        },
      },
    },
    {
      defaultValue: null,
      __typename: '__InputValue',
      description: null,
      name: 'pubTs',
      type: {
        __typename: '__Type',
        kind: 'SCALAR',
        name: 'Datetime',
        ofType: null,
      },
    },
    {
      defaultValue: null,
      __typename: '__InputValue',
      description: null,
      name: 'deleted',
      type: {
        __typename: '__Type',
        kind: 'SCALAR',
        name: 'Boolean',
        ofType: null,
      },
    },
    {
      defaultValue: null,
      __typename: '__InputValue',
      description: null,
      name: 'id',
      type: {
        __typename: '__Type',
        kind: 'SCALAR',
        name: 'Int',
        ofType: null,
      },
    },
    {
      defaultValue: null,
      __typename: '__InputValue',
      description: null,
      name: 'ts',
      type: {
        __typename: '__Type',
        kind: 'SCALAR',
        name: 'Datetime',
        ofType: null,
      },
    },
    {
      defaultValue: null,
      __typename: '__InputValue',
      description: null,
      name: 'author',
      type: {
        __typename: '__Type',
        kind: 'SCALAR',
        name: 'String',
        ofType: null,
      },
    },
  ],
  __typename: '__Type',
  description:
    'Represents an update to a `Article`. Fields that are set will be updated.',
  possibleTypes: null,
  fields: null,
}

export const ContentBlockType = {
  interfaces: null,
  enumValues: null,
  kind: 'SCALAR',
  name: 'ContentBlock',
  inputFields: null,
  __typename: '__Type',
  description: 'A content block defining a part of a document body',
  possibleTypes: null,
  fields: [
    {
      __typename: '__Field',
      description: null,
      name: 'type',
      type: {
        __typename: '__Type',
        kind: 'SCALAR',
        name: 'String',
        ofType: null,
      },
    },
  ],
}

export const TestTypes = [
  {
    interfaces: [
      {
        __typename: '__Type',
        kind: 'INTERFACE',
        name: 'Node',
        ofType: null,
      },
    ],
    enumValues: null,
    kind: 'OBJECT',
    name: 'Test',
    inputFields: null,
    __typename: '__Type',
    description: null,
    possibleTypes: null,
    fields: [
      {
        name: 'nodeId',
        type: {
          __typename: '__Type',
          kind: 'NON_NULL',
          name: null,
          ofType: {
            __typename: '__Type',
            kind: 'SCALAR',
            name: 'ID',
            ofType: null,
          },
        },
        __typename: '__Field',
        isDeprecated: false,
        description:
          'A globally unique identifier. Can be used in various places throughout the system to identify this single value.',
        args: [],
        deprecationReason: null,
      },
      {
        name: 'name',
        type: {
          __typename: '__Type',
          kind: 'NON_NULL',
          name: null,
          ofType: {
            __typename: '__Type',
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
        },
        __typename: '__Field',
        isDeprecated: false,
        description: null,
        args: [],
        deprecationReason: null,
      },
      {
        name: 'id',
        type: {
          __typename: '__Type',
          kind: 'NON_NULL',
          name: null,
          ofType: {
            __typename: '__Type',
            kind: 'SCALAR',
            name: 'Int',
            ofType: null,
          },
        },
        __typename: '__Field',
        isDeprecated: false,
        description: null,
        args: [],
        deprecationReason: null,
      },
      {
        name: 'ts',
        type: {
          __typename: '__Type',
          kind: 'NON_NULL',
          name: null,
          ofType: {
            __typename: '__Type',
            kind: 'SCALAR',
            name: 'Datetime',
            ofType: null,
          },
        },
        __typename: '__Field',
        isDeprecated: false,
        description: null,
        args: [],
        deprecationReason: null,
      },
      {
        name: 'deleted',
        type: {
          __typename: '__Type',
          kind: 'NON_NULL',
          name: null,
          ofType: {
            __typename: '__Type',
            kind: 'SCALAR',
            name: 'Boolean',
            ofType: null,
          },
        },
        __typename: '__Field',
        isDeprecated: false,
        description: null,
        args: [],
        deprecationReason: null,
      },
      {
        name: 'blocks',
        type: {
          __typename: '__Type',
          kind: 'LIST',
          name: null,
          ofType: {
            __typename: '__Type',
            kind: 'SCALAR',
            name: 'ContentBlock',
            ofType: null,
          },
        },
        __typename: '__Field',
        isDeprecated: false,
        description: null,
        args: [],
        deprecationReason: null,
      },
      {
        name: 'block',
        type: {
          __typename: '__Type',
          kind: 'OBJECT',
          name: 'ContentBlock',
          ofType: null,
        },
        __typename: '__Field',
        isDeprecated: false,
        description: null,
        args: [],
        deprecationReason: null,
      },
    ],
  },
  {
    interfaces: [
      {
        __typename: '__Type',
        kind: 'INTERFACE',
        name: 'Node',
        ofType: null,
      },
    ],
    enumValues: null,
    kind: 'OBJECT',
    name: 'Compound',
    inputFields: null,
    __typename: '__Type',
    description: null,
    possibleTypes: null,
    fields: [
      {
        name: 'nodeId',
        type: {
          __typename: '__Type',
          kind: 'NON_NULL',
          name: null,
          ofType: {
            __typename: '__Type',
            kind: 'SCALAR',
            name: 'ID',
            ofType: null,
          },
        },
        __typename: '__Field',
        isDeprecated: false,
        description:
          'A globally unique identifier. Can be used in various places throughout the system to identify this single value.',
        args: [],
        deprecationReason: null,
      },
      {
        name: 'name',
        type: {
          __typename: '__Type',
          kind: 'NON_NULL',
          name: null,
          ofType: {
            __typename: '__Type',
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
        },
        __typename: '__Field',
        isDeprecated: false,
        description: null,
        args: [],
        deprecationReason: null,
      },
      {
        name: 'id',
        type: {
          __typename: '__Type',
          kind: 'NON_NULL',
          name: null,
          ofType: {
            __typename: '__Type',
            kind: 'SCALAR',
            name: 'Int',
            ofType: null,
          },
        },
        __typename: '__Field',
        isDeprecated: false,
        description: null,
        args: [],
        deprecationReason: null,
      },
      {
        name: 'ts',
        type: {
          __typename: '__Type',
          kind: 'NON_NULL',
          name: null,
          ofType: {
            __typename: '__Type',
            kind: 'SCALAR',
            name: 'Datetime',
            ofType: null,
          },
        },
        __typename: '__Field',
        isDeprecated: false,
        description: null,
        args: [],
        deprecationReason: null,
      },
    ],
  },
  {
    interfaces: null,
    enumValues: null,
    kind: 'INPUT_OBJECT',
    name: 'TestInput',
    inputFields: [
      {
        defaultValue: null,
        __typename: '__InputValue',
        description: null,
        name: 'name',
        type: {
          __typename: '__Type',
          kind: 'NON_NULL',
          name: null,
          ofType: {
            __typename: '__Type',
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
        },
      },
      {
        defaultValue: null,
        __typename: '__InputValue',
        description: null,
        name: 'id',
        type: {
          __typename: '__Type',
          kind: 'SCALAR',
          name: 'Int',
          ofType: null,
        },
      },
      {
        defaultValue: null,
        __typename: '__InputValue',
        description: null,
        name: 'ts',
        type: {
          __typename: '__Type',
          kind: 'SCALAR',
          name: 'Datetime',
          ofType: null,
        },
      },
      {
        defaultValue: null,
        __typename: '__InputValue',
        description: null,
        name: 'deleted',
        type: {
          __typename: '__Type',
          kind: 'SCALAR',
          name: 'Boolean',
          ofType: null,
        },
      },
      {
        defaultValue: null,
        __typename: '__InputValue',
        description: null,
        name: 'blocks',
        type: {
          __typename: '__Type',
          kind: 'LIST',
          name: null,
          ofType: {
            __typename: '__Type',
            kind: 'SCALAR',
            name: 'ContentBlock',
            ofType: null,
          },
        },
      },
      {
        defaultValue: null,
        __typename: '__InputValue',
        description: null,
        name: 'block',
        type: {
          __typename: '__Type',
          kind: 'OBJECT',
          name: 'ContentBlock',
          ofType: null,
        },
      },
      {
        defaultValue: null,
        __typename: '__InputValue',
        description: null,
        name: 'pubTs',
        type: {
          __typename: '__Type',
          kind: 'SCALAR',
          name: 'Datetime',
          ofType: null,
        },
      },
    ],
    __typename: '__Type',
    description: 'An input for mutations affecting `Test`',
    possibleTypes: null,
    fields: null,
  },
  {
    interfaces: null,
    enumValues: null,
    kind: 'INPUT_OBJECT',
    name: 'TestPatch',
    inputFields: [
      {
        defaultValue: null,
        __typename: '__InputValue',
        description: null,
        name: 'name',
        type: {
          __typename: '__Type',
          kind: 'NON_NULL',
          name: null,
          ofType: {
            __typename: '__Type',
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
        },
      },
      {
        defaultValue: null,
        __typename: '__InputValue',
        description: null,
        name: 'id',
        type: {
          __typename: '__Type',
          kind: 'SCALAR',
          name: 'Int',
          ofType: null,
        },
      },
      {
        defaultValue: null,
        __typename: '__InputValue',
        description: null,
        name: 'ts',
        type: {
          __typename: '__Type',
          kind: 'SCALAR',
          name: 'Datetime',
          ofType: null,
        },
      },
    ],
    __typename: '__Type',
    description: 'An input for mutations affecting `Test`',
    possibleTypes: null,
    fields: null,
  },
  {
    interfaces: null,
    enumValues: null,
    kind: 'INPUT_OBJECT',
    name: 'CompoundInput',
    inputFields: [
      {
        defaultValue: null,
        __typename: '__InputValue',
        description: null,
        name: 'name',
        type: {
          __typename: '__Type',
          kind: 'NON_NULL',
          name: null,
          ofType: {
            __typename: '__Type',
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
        },
      },
      {
        defaultValue: null,
        __typename: '__InputValue',
        description: null,
        name: 'id',
        type: {
          __typename: '__Type',
          kind: 'SCALAR',
          name: 'Int',
          ofType: null,
        },
      },
      {
        defaultValue: null,
        __typename: '__InputValue',
        description: null,
        name: 'ts',
        type: {
          __typename: '__Type',
          kind: 'SCALAR',
          name: 'Datetime',
          ofType: null,
        },
      },
    ],
    __typename: '__Type',
    description: 'An input for mutations affecting `Compound`',
    possibleTypes: null,
    fields: null,
  },
  {
    interfaces: null,
    enumValues: null,
    kind: 'INPUT_OBJECT',
    name: 'CompoundPatch',
    inputFields: [
      {
        defaultValue: null,
        __typename: '__InputValue',
        description: null,
        name: 'name',
        type: {
          __typename: '__Type',
          kind: 'NON_NULL',
          name: null,
          ofType: {
            __typename: '__Type',
            kind: 'SCALAR',
            name: 'String',
            ofType: null,
          },
        },
      },
      {
        defaultValue: null,
        __typename: '__InputValue',
        description: null,
        name: 'id',
        type: {
          __typename: '__Type',
          kind: 'SCALAR',
          name: 'Int',
          ofType: null,
        },
      },
      {
        defaultValue: null,
        __typename: '__InputValue',
        description: null,
        name: 'ts',
        type: {
          __typename: '__Type',
          kind: 'SCALAR',
          name: 'Datetime',
          ofType: null,
        },
      },
    ],
    __typename: '__Type',
    description: 'An input for mutations affecting `Compound`',
    possibleTypes: null,
    fields: null,
  },
]

export const TestMutations = [
]

export const TestQueries = [
  {
    name: 'test',
    type: {
      __typename: '__Type',
      kind: 'OBJECT',
      name: 'Test',
      ofType: null,
    },
    __typename: '__Field',
    isDeprecated: false,
    description: null,
    args: [
      {
        defaultValue: null,
        __typename: '__InputValue',
        description: null,
        name: 'id',
        type: {
          __typename: '__Type',
          kind: 'NON_NULL',
          name: null,
          ofType: {
            __typename: '__Type',
            kind: 'SCALAR',
            name: 'Int',
            ofType: null,
          },
        },
      },
    ],
    deprecationReason: null,
  },
  {
    name: "createTest",
    __typename: "__Field",
    args: [],
    deprecationReason: null,
    description: "Creates a single `Test`.",
    type: {
      ofType: null,
      __typename: "__Type",
      name: "CreateTestPayload",
      kind: "OBJECT"
    },
    isDeprecated: false
  },
  {
    name: "updateTest",
    __typename: "__Field",
    args: [],
    deprecationReason: null,
    description: "Creates a single `Test`.",
    type: {
      ofType: null,
      __typename: "__Type",
      name: "UpdateTestPayload",
      kind: "OBJECT"
    },
    isDeprecated: false
  },
  {
    name: "deleteTest",
    __typename: "__Field",
    args: [],
    deprecationReason: null,
    description: "Creates a single `Test`.",
    type: {
      ofType: null,
      __typename: "__Type",
      name: "UpdateTestPayload",
      kind: "OBJECT"
    },
    isDeprecated: false
  },
  {
    name: 'compound',
    type: {
      __typename: '__Type',
      kind: 'OBJECT',
      name: 'Test',
      ofType: null,
    },
    __typename: '__Field',
    isDeprecated: false,
    description: null,
    args: [
      {
        defaultValue: null,
        __typename: '__InputValue',
        description: null,
        name: 'id',
        type: {
          __typename: '__Type',
          kind: 'NON_NULL',
          name: null,
          ofType: {
            __typename: '__Type',
            kind: 'SCALAR',
            name: 'Int',
            ofType: null,
          },
        },
      },
      {
        defaultValue: null,
        __typename: '__InputValue',
        description: null,
        name: 'ts',
        type: {
          __typename: '__Type',
          kind: 'NON_NULL',
          name: null,
          ofType: {
            __typename: '__Type',
            kind: 'SCALAR',
            name: 'DateTime',
            ofType: null,
          },
        },
      },
    ],
    deprecationReason: null,
  },
  {
    name: "createCompound",
    __typename: "__Field",
    args: [],
    deprecationReason: null,
    description: "Creates a single `Test`.",
    type: {
      ofType: null,
      __typename: "__Type",
      name: "CreateTestPayload",
      kind: "OBJECT"
    },
    isDeprecated: false
  },
  {
    name: "updateCompoundByNodeId",
    __typename: "__Field",
    args: [],
    deprecationReason: null,
    description: "Creates a single `Test`.",
    type: {
      ofType: null,
      __typename: "__Type",
      name: "UpdateTestPayload",
      kind: "OBJECT"
    },
    isDeprecated: false
  },
]
