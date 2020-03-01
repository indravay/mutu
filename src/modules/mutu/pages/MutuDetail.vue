<template>
  <div>
    <el-container v-if="loadingData" v-loading="loadingData">
      <el-main>

      </el-main>
    </el-container>
    <el-container v-else-if="detailData">
      <el-aside style="width:400px">
        <div class="info-pasien">
          <span class="info-title">Registrasi Pasien</span>
          <span class="info-status" :class="getClass(detailData.status)" >{{detailData.status}}/15</span>
          <ul class="info-detail">
            <li><font-awesome-icon icon="address-card" /> {{detailData.noreg}}</li>
            <li><font-awesome-icon icon="user" /> {{detailData.nama_pasien}}</li>
            <li><font-awesome-icon icon="user-md" /> {{detailData.dpjp}}</li>
            <li><font-awesome-icon icon="user-nurse" /> {{detailData.dokter_anastesi}}</li>
          </ul>
        </div>
      </el-aside>
      <el-main class="main-menu">
        <el-tabs v-model="activeName" >
          <el-tab-pane name="keselamatan_operasi">
            <span slot="label">
              Keselamatan Operasi 
              <i class="done el-icon-success" v-if="detailData.keselamatan_operasi != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <common-form type="keselamatan_operasi" :id='id' @setStatus="setStatus"/>
          </el-tab-pane>
          <el-tab-pane name="salah_sisi">
            <span slot="label">
              Kejadian Salah Sisi 
              <i class="done el-icon-success" v-if="detailData.kejadian_salah_sisi != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <common-form type="salah_sisi" :id='id' @setStatus="setStatus"/>
          </el-tab-pane><el-tab-pane name="elektif">
            <span slot="label">
              Elektif 
              <i class="done el-icon-success" v-if="detailData.elektif_update != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <elektif-form :id='id' @setStatus="setStatus"/>
          </el-tab-pane>
          <el-tab-pane name="identifikasi_pemberian_obat">
            <span slot="label">
              Identifikasi Pemberian Obat 
              <i class="done el-icon-success" v-if="detailData.identifikasi_pemberian_obat != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <common-form type="identifikasi_pemberian_obat" :id='id' @setStatus="setStatus"/> 
          </el-tab-pane>
          <el-tab-pane name="sbar">
            <span slot="label">
              Pelaksanaan SBAR 
              <i class="done el-icon-success" v-if="detailData.sbar_update != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <sbar-form type="sbar" :id='id' @setStatus="setStatus"/>
          </el-tab-pane>
          <el-tab-pane name="label_obat">
            <span slot="label">
              Stiker High Alert 
              <i class="done el-icon-success" v-if="detailData.obat_update != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <stiker-obat-form :id='id' @setStatus="setStatus"/>
          </el-tab-pane>
          <el-tab-pane name="pengaman_tempat_tidur">
            <span slot="label">
              Pemasangan Pengaman TT 
              <i class="done el-icon-success" v-if="detailData.pengaman_tempat_tidur != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <common-form type="pengaman_tempat_tidur" :id='id' @setStatus="setStatus"/> 
          </el-tab-pane>
          <el-tab-pane name="kesalahan_diagnosa">
            <span slot="label">
              Kesalahan Diagnosis 
              <i class="done el-icon-success" v-if="detailData.kesalahan_diagnosa != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <kesalahan-diagnosa-form :id='id' @setStatus="setStatus"/>
          </el-tab-pane>
          <el-tab-pane name="penandaan_lokasi_operasi">
            <span slot="label">
              Penandaan Lokasi Operasi 
              <i class="done el-icon-success" v-if="detailData.penandaan_lokasi_operasi != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <common-form type="penandaan_lokasi_operasi" :id='id' @setStatus="setStatus"/> 
          </el-tab-pane>
          <el-tab-pane name="asesmen_anastesi">
            <span slot="label">
              Kelengkapan Asesmen Pra Anastesi 
              <i class="done el-icon-success" v-if="detailData.asesmen_pra_anastesi != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <asesmen-form :id='id' @setStatus="setStatus"/> 
          </el-tab-pane>
          <el-tab-pane name="monitoring_fisiologis">
            <span slot="label">
              Monitoring Status Fisiologis 
              <i class="done el-icon-success" v-if="detailData.monitoring_status_fisiologis != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <common-form type="monitoring_fisiologis" :id='id' @setStatus="setStatus"/> 
          </el-tab-pane>
          <el-tab-pane name="monitoring_pemulihan">
            <span slot="label">
              Monitoring Pemulihan Anastesi 
              <i class="done el-icon-success" v-if="detailData.monitoring_pemulihan != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <common-form type="monitoring_pemulihan" :id='id' @setStatus="setStatus"/> 
          </el-tab-pane>
          <el-tab-pane name="informed_concent">
            <span slot="label">
              Kelengkapan Informed Concent 
              <i class="done el-icon-success" v-if="detailData.informed_concent != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <common-form type="informed_concent" :id='id' @setStatus="setStatus"/> 
          </el-tab-pane>
          <el-tab-pane name="tindakan_konversi">
            <span slot="label">
              Kejadian Tindakan Konversi 
              <i class="done el-icon-success" v-if="detailData.monitoring_konversi != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <tindakan-konversi-form :id='id' @setStatus="setStatus"/>
          </el-tab-pane>
          <el-tab-pane name="desaturasi">
            <span slot="label">
              Kejadian De-Saturasi
              <i class="done el-icon-success" v-if="detailData.desaturasi_update != null"></i>
              <i class="not-done el-icon-error" v-else></i>
              </span>
            <de-saturasi-form :id='id' @setStatus="setStatus"/>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
    <el-container v-else>
      <el-main>
        <h2>Data tidak ditemukan</h2>
      </el-main>
    </el-container>
    
  </div>
 
  
</template>
<script>
  import CommonForm from '../components/CommonForm'
  import ElektifForm from '../components/ElektifForm'
  import StikerObatForm from '../components/StikerObatForm'
  import KesalahanDiagnosaForm from '../components/KesalahanDiagnosaForm'
  import TindakanKonversiForm from '../components/TindakanKonversi'
  import DeSaturasiForm from '../components/DeSaturasiForm'
  import SbarForm from '../components/SbarForm'
  import AsesmenForm from '../components/AsesmenForm'
  import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'
  export default {
    props: ['id'],
    components: {
      CommonForm,
      ElektifForm,
      StikerObatForm,
      KesalahanDiagnosaForm,
      TindakanKonversiForm,
      DeSaturasiForm,
      SbarForm,
      AsesmenForm
    },
    data() {
      return {
        detailData : null,
        activeName: 'keselamatan_operasi',
        loadingData: true
      };
    },
    mounted(){
      this.loadingData = true;
      if(this.id){
        let getres = this.$store.getters['mutu/getDataByReg'](this.id);
        this.detailData = getres
        if(!this.detailData){
          this.$store.dispatch('mutu/getRegistrasiByID',{noreg:this.id}).then((res) =>{
            if(Object.entries(res.data).length > 0){
              let nullValue = 0
              for (let [key, value] of Object.entries(res.data)) {
                if(value == null && (key != 'created_at' && key != 'updated_at')){
                  nullValue++
                }
              }
              res.data.status = 15 - nullValue;
              this.detailData = res.data
            }
            this.loadingData = false;
          })
          
        }else{
          this.loadingData = false;
        }
      }
    },
    methods: {
      getClass(value){
        return {
          'full': (value >= 15),
          'empty': (value == 0),
          'partial': (value > 0 && value < 15),
        }
      },

      isEmpty(){
        return Object.entries(this.detailData).length === 0 && this.detailData.constructor === Object
      },

      setStatus(index){
        this.$store.dispatch('mutu/getRegistrasiByID',{noreg:this.id}).then((res) =>{
            if(Object.entries(res.data).length > 0){
              this.detailData = res.data
            }
        })
        // console.log(index)
        
        // this.detailData.kejadian_salah_sisi = 1
        // console.log(this.detailData[index]);
        // this.detailData["'"+index+"'"] = 1
        // Object:
        // forEach(this.detailData, function (value, prop, obj) {
        //   console.log(index+'-'+prop)
        //   if(prop == index){
        //     value = 1
        //   }
        // });
      }
    }
  };
</script>
<style>
  .main-menu{
    padding:50px;
  }

  /* .el-tabs__item:hover{
    color:#434A3B;
  } */


</style>
<style scoped>
  .not-done{
    color:#e74c3c;
  }

  .done{
    color:#2ecc71;
  }

  .info-pasien{
    background:#434A3B;
    width:calc(100%-20px);
    padding:10px;
    margin-top:50px;
    color:#fff;
    font-size:14px;
    position:relative;
  }
  .info-title::before{
     content: "";
    z-index:1;
    display: block;
    position: absolute;
    top: 0;
    width: 0px;
    height: 0px;
    right: -65px;
    border-top: 64px solid #fff;
	  border-right: 65px solid transparent;
  }
  .info-title{
    font-size:20px;
    background:#fff;
    color:#434A3B;
    padding:20px;
    position:absolute;
    top:20px;
    left:0;
    z-index:2
  }

  .info-status{
    font-size:20px;
    background:#fff;
    color:#434A3B;
    padding:20px;
    position:absolute;
    top:20px;
    right:0;
    color:white;
  }

  .info-status.full{
    background:#2ecc71
  }
  
  .info-status.partial{
    background:#E6A23C
  }

  .info-status.empty{
    background:#F56C6C
  }

  .info-status.full::before{
     content: "";
    z-index:1;
    display: block;
    position: absolute;
    top: 0;
    width: 0px;
    height: 0px;
    left: -65px;
    border-bottom: 64px solid #2ecc71;
	  border-left: 65px solid transparent;
  }

  .info-status.partial::before{
     content: "";
    z-index:1;
    display: block;
    position: absolute;
    top: 0;
    width: 0px;
    height: 0px;
    left: -65px;
    border-bottom: 64px solid #E6A23C;
	  border-left: 65px solid transparent;
  }

  .info-status.empty::before{
     content: "";
    z-index:1;
    display: block;
    position: absolute;
    top: 0;
    width: 0px;
    height: 0px;
    left: -65px;
    border-bottom: 64px solid #F56C6C;
	  border-left: 65px solid transparent;
  }

  .info-detail{
    margin-top:100px;
    list-style-type: none;
  }

  .info-detail li{
    padding:10px 5px;
  }

</style>
