<template>
  <el-container>
    <el-main>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="20" >
          <el-col :span="24" class="header-title">
            <el-col :span="12">
              <p class="title"><b >LIST DATA</b></p>
              <span class="sub-title">Terakhir diupdate : 20 Februari 2020, 20:00</span>
            </el-col>
            <el-input class="search-input" placeholder="Cari berdasarkan NRM/Nama pasien">
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-button style="float:right" type="primary" icon="el-icon-refresh" circle></el-button>
          </el-col>
          <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
              
              prop="date"
              label="Tanggal"
              width="150">
            </el-table-column>
            <el-table-column
              prop="name"
              label="No Registrasi"
              width="120">
            </el-table-column>
            <el-table-column
              prop="state"
              label="NRM"
              width="120">
            </el-table-column>
            <el-table-column
              prop="city"
              label="Nama Pasien"
              >
            </el-table-column>
            
            <el-table-column
              label="Aksi"
              width="150"
              >
              <template >
                <router-link :to="{ name: 'detail', params: { id: 1212 }}">
                  <el-button icon="el-icon-search" type="success" round>Detail</el-button>
                </router-link>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<style scoped>
  .title{
    font-size:25px;
    margin:0;
    /* float:left; */
  }

  .title p{
    margin:0;
  }

  .sub-title{
    color:#999;
    margin-top:10px;
    font-size:12px;
  }

  .header-title{
    margin-top:40px;
  }

  .search-input{
    margin-bottom:20px;
    width:300px;
    margin-left:10px;
    float:right;
  }

  .refresh-input{
    margin-bottom:20px;
    width:200px;
    margin-left:10px;
    float:right;
  }
</style>
<style>
.el-table td{
  padding:5px 0 ;
}

.el-button.is-round{
  padding:10px 25px;
}
</style>
<script>
  export default {
    methods: {
      handleClick() {
        console.log('click');
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }]
      }
    }
  }
</script>