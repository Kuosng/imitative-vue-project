<template>
  <div :id="id" />
</template>

<script>
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import Editor from "@toast-ui/editor";
import defaultOptions from "./default-options";

export default {
  props: {
    id: {
      type: String,
      required: false,
      default() {
        return (
          "markdown-editor-" +
          +new Date() +
          ((Math.random() * 1000).toFixed(0) + "")
        );
      },
    },
    options: {
      type: Object,
      default() {
        return defaultOptions;
      },
    },
  },
  data() {
    return {
      editor: null,
    };
  },
  computed: {
    editorOptions() {
      const options = Object.assign({}, defaultOptions, this.options);
      return options;
    },
  },
  watch: {},
  mounted() {
    this.initEditor();
  },
  destroyed() {
    this.destroyEditor();
  },
  methods: {
    initEditor() {
      this.editor = new Editor({
        el: document.getElementById(this.id),
        ...this.editorOptions,
      });
      this.editor.on("change", () => {
        this.$emit("input", this.editor.getValue());
      });
    },
    destroyEditor() {
      if (!this.editor) return;
      this.editor.off("change");
      this.editor.remove();
    },
  },
};
</script>