<template>
  <div>
    <el-container v-if="detailData">
      <el-aside style="width:400px">
        <div class="info-pasien">
          <span class="info-title">Registrasi Pasien</span>
          <ul class="info-detail">
            <li><font-awesome-icon icon="address-card" /> {{detailData.noreg}}</li>
            <li><font-awesome-icon icon="user" /> {{detailData.nama_pasien}}</li>
            <li><font-awesome-icon icon="user-md" /> {{detailData.dpjp}}</li>
            <li><font-awesome-icon icon="user-nurse" /> {{detailData.dokter_anastesi}}</li>
          </ul>

          
        </div>
      </el-aside>
      <el-main class="main-menu">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane name="keselamatan_operasi">
            <span slot="label">
              Keselamatan Operasi 
              <i class="done el-icon-success" v-if="detailData.keselamatan_operasi != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <common-form type="keselamatan_operasi"/>
          </el-tab-pane>
          <el-tab-pane name="salah_sisi">
            <span slot="label">
              Kejadian Salah Sisi 
              <i class="done el-icon-success" v-if="detailData.kejadian_salah_sisi != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <common-form type="salah_sisi"/>
          </el-tab-pane><el-tab-pane name="elektif">
            <span slot="label">
              Elektif 
              <i class="done el-icon-success" v-if="detailData.elektif_update != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <elektif-form/>
          </el-tab-pane>
          <el-tab-pane name="identifikasi_pemberian_obat">
            <span slot="label">
              Identifikasi Pemberian Obat 
              <i class="done el-icon-success" v-if="detailData.identifikasi_pemberian_obat != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <common-form type="identifikasi_pemberian_obat"/> 
          </el-tab-pane>
          <el-tab-pane name="sbar">
            <span slot="label">
              Pelaksanaan SBAR 
              <i class="done el-icon-success" v-if="detailData.sbar_update != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <common-form type="sbar"/>
          </el-tab-pane>
          <el-tab-pane name="label_obat">
            <span slot="label">
              Stiker High Alert 
              <i class="done el-icon-success" v-if="detailData.obat_update != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <stiker-obat-form/>
          </el-tab-pane>
          <el-tab-pane name="pengaman_tempat_tidur">
            <span slot="label">
              Pemasangan Pengaman TT 
              <i class="done el-icon-success" v-if="detailData.pengaman_tempat_tidur != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <common-form type="pengaman_tempat_tidur"/> 
          </el-tab-pane>
          <el-tab-pane name="kesalahan_diagnosa">
            <span slot="label">
              Kesalahan Diagnosis 
              <i class="done el-icon-success" v-if="detailData.kesalahan_diagnosa != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <kesalahan-diagnosa-form/>
          </el-tab-pane>
          <el-tab-pane name="penandaan_lokasi_operasi">
            <span slot="label">
              Penandaan Lokasi Operasi 
              <i class="done el-icon-success" v-if="detailData.penandaan_lokasi_operasi != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <common-form type="penandaan_lokasi_operasi"/> 
          </el-tab-pane>
          <el-tab-pane name="asesmen_anastesi">
            <span slot="label">
              Kelengkapan Asesmen Pra Anastesi 
              <i class="done el-icon-success" v-if="detailData.asesmen_pra_anastesi != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <common-form type="asesmen_anastesi"/> 
          </el-tab-pane>
          <el-tab-pane name="monitoring_fisiologis">
            <span slot="label">
              Monitoring Status Fisiologis 
              <i class="done el-icon-success" v-if="detailData.monitorin_status_fisiologis != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <common-form type="monitoring_fisiologis"/> 
          </el-tab-pane>
          <el-tab-pane name="monitoring_pemulihan">
            <span slot="label">
              Monitoring Pemulihan Anastesi 
              <i class="done el-icon-success" v-if="detailData.monitoring_pemulihan != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <common-form type="monitoring_pemulihan"/> 
          </el-tab-pane>
          <el-tab-pane name="informed_concent">
            <span slot="label">
              Kelengkapan Informed Concent 
              <i class="done el-icon-success" v-if="detailData.informed_concent != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <common-form type="informed_concent"/> 
          </el-tab-pane>
          <el-tab-pane name="tindakan_konversi">
            <span slot="label">
              Kejadian Tindakan Konversi 
              <i class="done el-icon-success" v-if="detailData.monitoring_konversi != null"></i>
              <i class="not-done el-icon-error" v-else></i>
            </span>
            <tindakan-konversi-form/>
          </el-tab-pane>
          <el-tab-pane name="desaturasi">
            <span slot="label">
              Kejadian De-Saturasi
              <i class="done el-icon-success" v-if="detailData.desaturasi_update != null"></i>
              <i class="not-done el-icon-error" v-else></i>
              </span>
            <de-saturasi-form/>
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
  import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'
  export default {
    props: ['id'],
    components: {
      CommonForm,
      ElektifForm,
      StikerObatForm,
      KesalahanDiagnosaForm,
      TindakanKonversiForm,
      DeSaturasiForm
    },
    data() {
      return {
        detailData : null,
        activeName: 'keselamatan_operasi'
      };
    },
    mounted(){
      if(this.id){
        this.detailData = this.$store.getters['mutu/getDataByReg'](this.id);
        if(!this.detailData){
          this.$store.dispatch('mutu/getRegistrasiByID',{noreg:this.id}).then((res) =>{
            if(Object.entries(res.data).length > 0){
              this.detailData = res.data
            }
          })
        }
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },

      isEmpty(){
        return Object.entries(this.detailData).length === 0 && this.detailData.constructor === Object
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

  .info-title{
    font-size:20px;
    background:#fff;
    color:#434A3B;
    padding:20px;
    position:absolute;
    top:20px;
    left:0;
  }

  .info-detail{
    margin-top:100px;
    list-style-type: none;
  }

  .info-detail li{
    padding:10px 5px;
  }

</style>
