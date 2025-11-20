'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('questions', [
      {
        id_page: 1, 
        question_text: 'Seberapa mudah anda menggunakan aplikasi?',
        question_type: 'rating',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_page: 1, 
        question_text: 'Seberapa mudah anda menemukan fitur yang anda butuhkan?',
        question_type: 'rating',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_page: 1, 
        question_text: 'Apakah tampilan aplikasi terasa intuitif (mudah dipahami)?',
        question_type: 'rating',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_page: 1, 
        question_text: 'Seberapa lama anda memahami cara mengoperasikannya?',
        question_type: 'rating',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_page: 1, 
        question_text: 'Apakah petunjuk atau tutorial/guide book di aplikasi cukup membantu?',
        question_type: 'rating',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //page2
      {
        id_page: 2, 
        question_text: 'Seberapa cepat aplikasi merespons saat digunakan?',
        question_type: 'rating',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_page: 2, 
        question_text: 'Apakah semua fitur berjalan dengan baik tanpa error?',
        question_type: 'mixed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_page: 2, 
        question_text: 'Selama menggunakan aplikasi, apakah anda pernah mengalami crash atau bug?',
        question_type: 'mixed2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //page3
      {
        id_page: 3, 
        question_text: 'Seberapa sering kamu pakai aplikasi ini untuk kebutuhanmu?',
        question_type: 'rating',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_page: 3, 
        question_text: 'Apakah fitur yang tersedia membantu menyelesaikan pekerjaanmu?',
        question_type: 'mixed3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //page4
      {
        id_page: 4, 
        question_text: 'Gimana perasaanmu saat pakai aplikasi ini?',
        question_type: 'rating',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_page: 4, 
        question_text: 'Apakah tampilannya menarik dan nyaman dilihat?',
        question_type: 'mixed3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_page: 4, 
        question_text: 'Apakah warna dan ikon di aplikasi membantu kamu mengenali fungsi tiap fitur?',
        question_type: 'mixed3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_page: 4, 
        question_text: 'Seberapa puas kamu secara keseluruhan?',
        question_type: 'rating',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //page5
      {
        id_page: 5, 
        question_text: 'Sebarapa sering aplikasi eror ?',
        question_type: 'rating',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_page: 5, 
        question_text: 'Apakah data pernah hilang / tidak tersimpan dengan benar?',
        question_type: 'mixed2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //page6
      {
        id_page: 6, 
        question_text: 'Apakah aplikasi berjalan lancar di semua perangkat yang kamu gunakan?',
        question_type: 'mixed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_page: 6, 
        question_text: 'Apakah kamu pernah kesulitan karena koneksi internet atau spesifikasi HP/PC?',
        question_type: 'mixed2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //page7
      {
        id_page: 7, 
        question_text: 'Ketika terdapat problem pada apps yang anda pergunakan, seberapa cepat team untuk support & merespons?',
        question_type: 'rating',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_page: 7, 
        question_text: 'Apakah anda mengetahui ke mana harus melapor jika terdapat bug/eror pada apps?',
        question_type: 'Y/N',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_page: 7, 
        question_text: 'Apakah feedback/laporan anda sebelumnya sudah ditanggapi dengan baik?',
        question_type: 'Y/N',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      //page8
      {
        id_page: 8, 
        question_text: 'Fitur apa yang paling sering anda pergunakan?',
        question_type: 'suggest',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_page: 8, 
        question_text: 'Fitur apa yang menurut anda kurang berguna?',
        question_type: 'suggest',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id_page: 8, 
        question_text: 'Fitur apa yang kamu harap ada tapi belum tersedia?',
        question_type: 'suggest',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('questions', null, {});
  }
};
