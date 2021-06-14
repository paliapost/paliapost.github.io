const data = {
  type: "qna",
  messages: [
    {
      id: "850034884315054140",
      type: 0,
      content:
        "How big of a focus is the narrative for this game. Is it more of a side thing or is it the meat of the game?",
      channel_id: "829113775876735026",
      author: {
        id: "281392447744114688",
        username: "KingKirb",
        avatar: "361e80aba60762286c88d69707fcb6d6",
        discriminator: "4551",
        public_flags: 0
      },
      attachments: [],
      embeds: [],
      mentions: [],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2021-06-03T15:35:09.305000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: []
    },
    {
      id: "850036371213254676",
      type: 19,
      content:
        "Hi KingKirb, lore is something we're very passionate about and we've been investing in since day 1",
      channel_id: "829113775876735026",
      author: {
        id: "849859808127746118",
        username: "[S6] Aidan",
        avatar: "2c4dda1347e2f66654be2a8253ab6941",
        discriminator: "5301",
        public_flags: 0
      },
      attachments: [],
      embeds: [],
      mentions: [
        {
          id: "281392447744114688",
          username: "KingKirb",
          avatar: "361e80aba60762286c88d69707fcb6d6",
          discriminator: "4551",
          public_flags: 0
        }
      ],
      mention_roles: [],
      pinned: false,
      mention_everyone: false,
      tts: false,
      timestamp: "2021-06-03T15:41:03.809000+00:00",
      edited_timestamp: null,
      flags: 0,
      components: [],
      message_reference: {
        channel_id: "829113775876735026",
        message_id: "850034884315054140"
      },
      hit: true
    }
  ]
};

const arr = [data, data];

const mappedArr = arr.map(({ type, messages }) => ({
	type,
  messages: messages.map(({ id, content, author, timestamp }) => ({
    id,
    content,
    username: author.username,
    timestamp
  }))
}));


console.log(mappedArr);

