<template>
  <div>
    <zl-form
      ref="form"
      label-width="100px"
      :options="options"
      @on-preview="handlePreview"
      @on-remove="handleRemove"
      @on-success="handleSuccess"
      @on-error="handleError"
      @on-progress="handleProgress"
      @on-change="handleChange"
      @before-upload="beforeUpload"
      @before-remove="beforeRemove"
      @on-exceed="handleExceed"
    >
      <template #uploadArea>
        <el-button size="small" type="primary">Click to upload</el-button>
      </template>
      <template #uploadTip>
        <div style="color: #ccc; font-size: 12px;">
          jpg/png files with a size less than 500kb
        </div>
      </template>
      <template #action="scope">
        <el-button type="primary" @click="onSubmit(scope)">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </template>
    </zl-form>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage, ElMessageBox } from "element-plus";
import { ref } from "vue-demi";
import { FormInstance, FormOptions } from "../../components/form/src/types/types";

interface Scope {
  form: FormInstance,
  model: any
}

let form = ref();

let options: FormOptions[] = [
  // 用户名输入框
  {
    type: 'input',
    value: '',
    placeholder: '请输入用户名',
    label: '用户名',
    prop: 'username',
    rules: [
      {
        required: true,
        message: '用户名不能为空',
        trigger: 'blur'
      },
      {
        min: 2,
        max: 6,
        message: '用户名在2-6位之间',
        trigger: 'blur'
      }
    ],
    attrs: {
      clearable: true
    }
  },
  // 密码输入框
  {
    type: 'input',
    value: '',
    placeholder: '请输入密码',
    label: '密码',
    prop: 'password',
    rules: [
      {
        required: true,
        message: '密码不能为空',
        trigger: 'blur'
      },
      {
        min: 6,
        max: 15,
        message: '密码在6-15位之间',
        trigger: 'blur'
      }
    ],
    attrs: {
      showPassword: true,
      clearable: true
    }
  },
  // 下拉选择框
  {
    type: 'select',
    value: '',
    placeholder: '请选择职位',
    prop: 'role',
    label: '职位',
    attrs: {
      style: {
        width: '300px'
      }
    },
    rules: [
      {
        required: true,
        message: '职位不能为空',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'option',
        label: '经理',
        value: 1
      },
      {
        type: 'option',
        label: '主管',
        value: 2
      },
      {
        type: 'option',
        label: '员工',
        value: 3
      }
    ]
  },
  // 多选框
  {
    type: 'checkbox-group',
    value: [],
    prop: 'like',
    label: '爱好',
    rules: [
      {
        required: true,
        message: '爱好不能为空',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'checkbox',
        label: '足球',
        value: '1'
      },
      {
        type: 'checkbox',
        label: '篮球',
        value: '2'
      },
      {
        type: 'checkbox',
        label: '排球',
        value: '3'
      }
    ]
  },
  // 单选框
  {
    type: 'radio-group',
    value: '',
    prop: 'gender',
    label: '性别',
    rules: [
      {
        required: true,
        message: '性别不能为空',
        trigger: 'change'
      }
    ],
    children: [
      {
        type: 'radio',
        label: '男',
        value: 'male'
      },
      {
        type: 'radio',
        label: '女',
        value: 'female'
      },
      {
        type: 'radio',
        label: '保密',
        value: 'secret'
      }
    ]
  },
  // 文件上传
  {
    type: 'upload',
    label: '上传',
    prop: 'pic',
    uploadAttrs: {
      action: 'https://jsonplaceholder.typicode.com/posts/',
      multiple: true,
      limit: 3
    },
    rules: [
      {
        required: true,
        message: '文件不能为空',
        trigger: 'change'
      }
    ]
  },
  // 富文本框
  {
    type: 'editor',
    value: '',
    prop: 'desc',
    label: '描述',
    placeholder: '请输入描述',
    rules: [
      {
        required: true,
        message: '描述不能为空',
        trigger: 'blur'
      }
    ]
  }
]


// 提交
let onSubmit = (scope: Scope) => {
  scope.form.validate((valid) => {
    if (valid) {
      console.log(scope.model);
      ElMessage.success('提交成功');
    } else {
      ElMessage.error('表单填写有误，请检查');
    }
  })
}
// 重置
let resetForm = () => {
  form.value.resetFields();
}


let handleRemove = (val: any) => {
  console.log('handleRemove =>', val);
}
let handlePreview = (file: any) => {
  console.log('handlePreview =>', file);
}
let handleSuccess = (val: any) => {
  console.log('handleSuccess =>', val);
}
let handleError = (val: any) => {
  console.log('handleError =>', val);
}
let handleProgress = (val: any) => {
  console.log('handleProgress =>', val);
}
let handleChange = (val: any) => {
  console.log('handleChange =>', val);
}
let beforeUpload = (file: any) => {
  console.log('beforeUpload =>', file);
}
let beforeRemove = (val: any) => {
  return ElMessageBox.confirm(`Cancel the transfert of ${val.file.name} ?`);
}
let handleExceed = (val: any) => {
  return ElMessage.warning(
    `The limit is 3, you selected ${
      val.files.length
    } files this time, add up to ${val.files.length + val.fileList.length} totally`
  );
}
</script>

<style lang="scss" scoped>

</style>