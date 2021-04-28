const DUMMY_ITEMS = [
  {
    id: '56a4a98a-5aae-4512-8a09-9125e65d1026',
    name: 'Morbi a ipsum.',
    icon: 'http://dummyimage.com/64x64.png/cc0000/ffffff',
    photo: 'http://dummyimage.com/640x320.png/dddddd/000000',
    defails:
      'Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    createdOn: '2021-01-28'
  },
  {
    id: 'de9574a0-ecda-4d1b-a76a-ed8a25a15279',
    name:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    icon: 'http://dummyimage.com/64x64.png/ff4444/ffffff',
    photo: 'http://dummyimage.com/640x320.png/5fa2dd/ffffff',
    defails:
      'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.',
    createdOn: '2021-03-09'
  },
  {
    id: 'fc6a0d28-9a31-4990-a255-2205b6b6dc3d',
    name:
      'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    icon: 'http://dummyimage.com/64x64.png/cc0000/ffffff',
    photo: 'http://dummyimage.com/640x320.png/5fa2dd/ffffff',
    defails:
      'Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.',
    createdOn: '2021-03-30'
  },
  {
    id: '8bda3412-e602-4452-96fd-7cff7bf7a6ee',
    name:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    icon: 'http://dummyimage.com/64x64.png/5fa2dd/ffffff',
    photo: 'http://dummyimage.com/640x320.png/ff4444/ffffff',
    defails:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.',
    createdOn: '2021-03-31'
  },
  {
    id: '83065380-45a0-4b3a-8bb4-a478e430f2ba',
    name: 'Aliquam sit amet diam in magna bibendum imperdiet.',
    icon: 'http://dummyimage.com/64x64.png/cc0000/ffffff',
    photo: 'http://dummyimage.com/640x320.png/cc0000/ffffff',
    defails:
      'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
    createdOn: '2021-03-01'
  },
  {
    id: '17d174dd-df80-45cf-9379-773720aa6ed3',
    name: 'Curabitur in libero ut massa volutpat convallis.',
    icon: 'http://dummyimage.com/64x64.png/ff4444/ffffff',
    photo: 'http://dummyimage.com/640x320.png/5fa2dd/ffffff',
    defails:
      'Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
    createdOn: '2021-01-03'
  },
  {
    id: '2b18e243-9a47-4be0-b245-2d2397d17f29',
    name: 'Vivamus in felis eu sapien cursus vestibulum.',
    icon: 'http://dummyimage.com/64x64.png/cc0000/ffffff',
    photo: 'http://dummyimage.com/640x320.png/cc0000/ffffff',
    defails:
      'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.',
    createdOn: '2021-01-23'
  },
  {
    id: '8b22389e-6905-4a38-b51d-0e99a97673df',
    name: 'Integer ac leo.',
    icon: 'http://dummyimage.com/64x64.png/5fa2dd/ffffff',
    photo: 'http://dummyimage.com/640x320.png/ff4444/ffffff',
    defails:
      'Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
    createdOn: '2021-03-24'
  },
  {
    id: '97269c40-cab7-4214-beac-40dd2ea7045b',
    name: 'Curabitur at ipsum ac tellus semper interdum.',
    icon: 'http://dummyimage.com/64x64.png/cc0000/ffffff',
    photo: 'http://dummyimage.com/640x320.png/dddddd/000000',
    defails:
      'Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
    createdOn: '2021-02-15'
  },
  {
    id: 'd289e585-47fe-46cf-9fab-0c3e8fed5cd5',
    name: 'Aliquam erat volutpat.',
    icon: 'http://dummyimage.com/64x64.png/5fa2dd/ffffff',
    photo: 'http://dummyimage.com/640x320.png/ff4444/ffffff',
    defails:
      'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.',
    createdOn: '2021-02-04'
  },
  {
    id: 'd1268595-ba5d-45a2-917f-f0be4f8530cb',
    name: 'In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    icon: 'http://dummyimage.com/64x64.png/dddddd/000000',
    photo: 'http://dummyimage.com/640x320.png/dddddd/000000',
    defails:
      'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.',
    createdOn: '2021-02-15'
  },
  {
    id: 'a07d8167-9884-4ee6-9769-901d04972089',
    name: 'Nullam molestie nibh in lectus.',
    icon: 'http://dummyimage.com/64x64.png/dddddd/000000',
    photo: 'http://dummyimage.com/640x320.png/cc0000/ffffff',
    defails:
      'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
    createdOn: '2021-04-06'
  },
  {
    id: 'c4d34548-b475-4736-b1bb-6f3085ea543e',
    name: 'Nulla justo.',
    icon: 'http://dummyimage.com/64x64.png/cc0000/ffffff',
    photo: 'http://dummyimage.com/640x320.png/cc0000/ffffff',
    defails:
      'Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
    createdOn: '2021-03-08'
  },
  {
    id: 'bc7d1f5e-6b4d-4ba2-8757-1cb63b0fb481',
    name: 'Suspendisse potenti.',
    icon: 'http://dummyimage.com/64x64.png/dddddd/000000',
    photo: 'http://dummyimage.com/640x320.png/cc0000/ffffff',
    defails:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.',
    createdOn: '2021-01-05'
  },
  {
    id: '6bd8f1b7-ae96-4ca8-ac33-c3abe1030abd',
    name:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    icon: 'http://dummyimage.com/64x64.png/dddddd/000000',
    photo: 'http://dummyimage.com/640x320.png/cc0000/ffffff',
    defails:
      'Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
    createdOn: '2021-03-19'
  },
  {
    id: '739b1c58-82ec-4a74-bff6-d0e175282c43',
    name: 'Duis mattis egestas metus.',
    icon: 'http://dummyimage.com/64x64.png/ff4444/ffffff',
    photo: 'http://dummyimage.com/640x320.png/ff4444/ffffff',
    defails:
      'Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.',
    createdOn: '2021-01-06'
  }
];

export default DUMMY_ITEMS;
